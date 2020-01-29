# Team Tuvalu
# Joseph Yusufov
# 2019-09-28

from flask import Flask
from flask import render_template
from flask import request
from flask import session
import os

app = Flask(__name__) #create instance of class Flask
app.secret_key = os.urandom(24)



@app.route('/')  #  Login Page
def index():
    return render_template("landing.html")


@app.route("/auth")
def authentication():
    """
    This only accepts GET requests
    """
    print("\n" + "BODY OF REQUEST :: " + str(request))
    print("REQUEST ARGS :: " + str(request.args)+ "\n")

    if request.args.get('username'):  # if the form was filled out
        session['user'] = request.args.get('username')  # start a session, and populate the dictionary with the given username

    if 'user' in session:  #  If the session dictionaty does in fact have a user in it.
        return render_template("index.html", login_info=session, method_type=request.method)  # load the template with the user's session info
    return "Not logged in"  #  Otherwise let the user know that they have not logged in


@app.route('/logout')  #  Logout removes the User's session from the dictionary stored on the server, even if the cookie still exists
def logout():
    session.pop('user', None)
    return render_template("logout.html")


if __name__ == "__main__":
    app.debug = True
    app.run()
