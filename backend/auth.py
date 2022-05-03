# stores the code for the authorization of the website

from flask import Blueprint, request, jsonify, make_response
from models import User
from models import db
from flask import redirect, url_for
from flask_login import logout_user
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['POST'])
def login():
    email = request.form.get('email')
    password = request.form.get('password')

    if not email or not password:
        return make_response('Could not verify', 401, {'Authentication': 'login required"'})

    user = User.query.filter_by(email=email).first()

    if check_password_hash(user.password, password):

        token = jwt.encode({'email' : user.email, 'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=45)}, 'dfsgkjdsnasdfa safsanjkfbaskjf', "HS256")
        return jsonify({'token' : token})

    return make_response('You have entered an invalid username or password',  401, {'Authentication': '"login required"'})

@auth.route('/logout')
def logout():
    return "<p>Logout</p>"

@auth.route('/sign-up', methods=['POST'])
def sign_up():
    email = request.form.get('email')
    password = request.form.get('password')
    hashed_password = generate_password_hash(password, method='sha256')
    new_user = User(email=email, password=hashed_password)
    try:
        db.session.add(new_user)
        db.session.commit()
    except:
        db.session.rollback()
        raise
    finally:
        db.session.close()
    user = User.query.filter_by(email=email).first()
    return user.as_dict()

@auth.route('/signout')
def signout():
    logout_user()

    return redirect(url_for('login'))

def token_required(f):
    @wraps(f)
    def decorator(*args, **kwargs):

        token = None

        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']

        if not token:
            return jsonify({'message': 'a valid token is missing'})

        try:
            data = jwt.decode(token, 'dfsgkjdsnasdfa safsanjkfbaskjf', algorithms=["HS256"])
            current_user = User.query.filter_by(email=data['email']).first()
        except:
            return jsonify({'message': 'token is invalid'})

        return f(current_user, *args, **kwargs)
    return decorator