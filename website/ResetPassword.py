from flask import redirect, url_for, render_template

from flask import Blueprint
from . import db
from .forms import PasswordForm
from .models import User

#This URL is sent to user to reset the password
reset = Blueprint('ResetPassword', __name__)
@reset.route('/reset', methods=["GET", "POST"])
def reset_password(email):

    form = PasswordForm()

    if form.validate_on_submit():
        user = User.query.filter_by(email=email).first_or_404()

        user.password = form.password.data

        db.session.add(user)
        db.session.commit()

        return redirect(url_for('signin'))

    return render_template('reset_password.html', form=form)