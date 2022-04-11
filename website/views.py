# stores frontend page endpoints(url) or standard routes for our website
# blueprint of the application containing routes

from flask import Blueprint

views = Blueprint('views', __name__)

@views.route('/') # route for homepage
def home(): # runs when homepage is accessed
    return "<h1>Test</h1>" # replace with html file for home page

