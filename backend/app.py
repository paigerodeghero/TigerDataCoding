from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from .auth import auth
from.dataset import dataset
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SECRET_KEY'] = "dfsgkjdsnasdfa safsanjkfbaskjf"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)
app.register_blueprint(auth, url_prefix = '/')
app.register_blueprint(dataset, url_prefix = '/')

if __name__ == "__main__":
    app.run(debug=True)