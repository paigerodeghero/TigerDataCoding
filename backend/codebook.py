from flask import Blueprint, request, jsonify, make_response
from models import User, Codebook
from models import db
import json
import pandas as pd

codebook = Blueprint('codebook', __name__)


@codebook.route('/uploadCodebook', methods=['GET', 'POST'])
def uploadCodebook():
    if request.method == 'POST':
        df = pd.read_csv(request.files.get('file'))
        return df.to_json()


@codebook.route('/addCodebook', methods=['POST'])
def addCodebook():
    if request.method == 'POST':
        data = json.loads(request.data)
        codebook_id = data['codebook_id']
        user_id = data['user_id']
        user = User.query.filter_by(id=user_id).first()
        codebook = Codebook.query.filter_by(id=codebook_id).first()
        user.codebook.append(codebook)
        db.session.commit()
        return jsonify({'status': 'success'})
