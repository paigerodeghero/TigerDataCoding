import resource

from flask import Flask
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
api = Api(app)

names = {"tim":{"email":"tim@icloud.com", "password":"tim999"},
         "bill":{"email":"bill@icloud.com", "password":"bill999"}}

class ResetPass(Resource):
    def get(self, name):
        return names[name]


    def post(self):
        return {"data": "Posted"}



api.add_resource(ResetPass, "/reset/<string:name>")

if __name__ == '__main__':
    app.run(debug=True)
