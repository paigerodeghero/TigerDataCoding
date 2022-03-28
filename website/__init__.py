# this file is used to make the website folder a python package
# any file imported in the website folder will automatically trigger the init.py to be run

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path

db = SQLAlchemy() # object to be used when adding, modifying the database 
DB_NAME = "database.db"

# initializes the flask app
def create_app():
    app = Flask(__name__)
    app.config['SECRET KEY'] = 'sdafsafasdf gdaggfhsdfh' # secures cookies and session data related to the website
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}' # location of the database, currenty in the website directory
    db.init_app(app) # initialize database with webapp

    from .views import views
    from .auth import auth

    app.register_blueprint(views, url_prefix = '/')
    app.register_blueprint(auth, url_prefix = '/') 
    
    from .models import User, Codebook, Code, Permission, Dataset, DatasetCell, DatasetColumn, DatasetRow, DatasetUserPermission, DatasetUserRow

    create_database(app)
    return app

# function to create database
def create_database(app):
    if not path.exists('website/' + DB_NAME): # create db if not exist
        db.create_all(app = app)
        print('Created Database!')
