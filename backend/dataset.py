from flask import Blueprint, request, jsonify, make_response
from models import User, Dataset
from models import db
from flask import redirect, url_for
from flask_login import logout_user
import json
import pandas as pd


dataset = Blueprint('dataset', __name__)

@dataset.route('/upload', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        df = pd.read_csv(request.files.get('file'))
        return df.to_json()

@dataset.route('/assign', methods=['POST'])
def assign():
    if request.method == 'POST':
        updateEmail = request.form.get('updateEmail')
        user = User.query.filter_by(email=updateEmail).first()
        if updateEmail is None:
            return "error"
        dataset = Dataset.query.filter_by(userId=email).first()
        dataset.userId=dataset.userId + "," + updateEmail
        datasetId=dataset.id
        try:
            db.session.update(dataset)
            db.session.commit()
        except:
            db.session.rollback()
            raise
        finally:
            db.session.close()
        dataset = Dataset.query.filter_by(id=datasetId).first()
        return dataset.as_dict()