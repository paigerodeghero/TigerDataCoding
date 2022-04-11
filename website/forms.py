from flask_wtf import Form
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired, Email


#This is a function about forgetting password which allowed users to reset their user Id and password(This has not been added yet)
#There's two forms are needed, one for reset and another for change password after validation
class EmailForm(Form):
    email = StringField('Email', validators=[DataRequired(), Email()])

class PasswordForm(Form):
    password = PasswordField('Email', validators=[DataRequired()])