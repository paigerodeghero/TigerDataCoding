
# stores all the database models

from flask_login import UserMixin # custom class inhertied for flask login
from sqlalchemy.sql import func
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime
from os import path

db = SQLAlchemy()

# user table schema
class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(150), unique = True, nullable = False)
    password = db.Column(db.String(150), nullable = False)
    date = db.Column(db.DateTime(timezone = True), default = func.now(), nullable = False) # current timestamp returned
    isEmailVerified = db.Column(db.Boolean, default=False, nullable = False)
    
    codebook = db.relationship('Codebook')
    datasetuserpermission = db.relationship('DatasetUserPermission')
    dataset = db.relationship('Dataset')
    datasetrow = db.relationship('DatasetRow')

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

# code book schema
class Codebook(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    label = db.Column(db.String(250), nullable = False)
    description = db.Column(db.String(350), nullable = False)
    isPrivate = db.Column(db.Boolean, default=False, nullable = False)
    ownerId = db.Column(db.Integer, db.ForeignKey('user.id')) # lower case must for foreign key reference
    
    code = db.relationship('Code')
    dataset = db.relationship('Dataset')

# code schema
class Code(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    code = db.Column(db.String(350), nullable = False)
    description = db.Column(db.String(350), nullable = False)
    examples = db.Column(db.String(150), nullable = False)
    notes = db.Column(db.String(150), nullable = False)
    codeBookId = db.Column(db.Integer, db.ForeignKey('codebook.id'))

    datasetrow = db.relationship('DatasetRow')

# permissions schema
class Permission(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    label = db.Column(db.String(150), nullable = False)
    
    datasetuserpermission = db.relationship('DatasetUserPermission')

# dataset schema
class Dataset(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    label = db.Column(db.String(250), nullable = False)
    isPrivate = db.Column(db.Boolean, default=False, nullable = False)
    userId = db.Column(db.String(250), db.ForeignKey('user.id'))
    codeBookId = db.Column(db.Integer, db.ForeignKey('codebook.id'))

    datasetuserpermission = db.relationship('DatasetUserPermission')
    datasetuserrow = db.relationship('DatasetUserRow')
    datasetusercolumn = db.relationship('DatasetUserColumn')
    datasetrow = db.relationship('DatasetRow')
    datasetcolumn = db.relationship('DatasetColumn')

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

# dataset permission schema
class DatasetUserPermission(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    datasetId = db.Column(db.Integer, db.ForeignKey('dataset.id'))
    userId = db.Column(db.Integer, db.ForeignKey('user.id'))
    permissionId = db.Column(db.Integer, db.ForeignKey('permission.id'))

class DatasetUserRow(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    datasetId = db.Column(db.Integer, db.ForeignKey('dataset.id'))
    userId = db.Column(db.Integer, db.ForeignKey('user.id'))
    limit = db.Column(db.Integer)
    start = db.Column(db.Integer)
    end = db.Column(db.Integer)

class DatasetRow(db.Model):
    __tablename__ = 'datasetrow' # naming convention of sqlite was giving errors while referencing
    id = db.Column(db.Integer, primary_key = True)
    order = db.Column(db.Integer, nullable = False)
    datasetId = db.Column(db.Integer, db.ForeignKey('dataset.id'))
    codeId = db.Column(db.Integer, db.ForeignKey('code.id'))
    coderId = db.Column(db.Integer, db.ForeignKey('user.id'))

    datasetcell = db.relationship('DatasetCell')
    

class DatasetColumn(db.Model):
    __tablename__ = 'datasetcolumn' # naming convention of sqlite was giving errors while referencing
    id = db.Column(db.Integer, primary_key = True)
    order = db.Column(db.Integer, nullable = False)
    columnName = db.Column(db.String(150), nullable = False)
    datasetId = db.Column(db.Integer, db.ForeignKey('dataset.id'))

    datasetcell = db.relationship('DatasetCell')

class DatasetCell(db.Model):
    nid = db.Column(db.Integer, primary_key = True)
    value = db.Column(db.String(150), nullable = False)
    columnId = db.Column(db.Integer, db.ForeignKey('datasetcolumn.id'))
    rowId = db.Column(db.Integer, db.ForeignKey('datasetrow.id'))
    

if __name__ == '__main__':
   db.create_all()