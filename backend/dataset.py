from flask import Blueprint, request, jsonify
from .models import User, Dataset
from . import db
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