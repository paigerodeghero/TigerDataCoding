from flask import Blueprint, request, jsonify, make_response
from models import User, Stats
from models import db
import json
import pandas as pd

statistics = Blueprint('statistics', __name__)

@statistics.route('assign/', methods=['POST', 'GET']):
def addStats():
     if request.method == 'POST':
        data = json.loads(request.data)
        codebook_id = data['codebook_id']
        user_id = data['user_id']
        stats_id = data['stats_id']
        user = User.query.filter_by(id=user_id).first()
        codebook = Codebook.query.filter_by(id=codebook_id).first()
        stats = Statistics.query.filter_by(id=stats_id).first()
        user.codebook.stats.append(stats)
        db.session.commit()
        return jsonify({'status': 'success'})

@statistics.route('completion_percentage/', methods=['POST', 'GET'])
def completion_percentage():)
    if request.method == 'GET':
        data = json.loads(request.data)
        codebook_id = data['codebook_id']
        stats = stats.query.filter_by(codebook_id=codebook_id).first()
        return stats.completion_percentage

