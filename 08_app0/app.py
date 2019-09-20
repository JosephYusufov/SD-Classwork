# FOR SOME REASON the VSCode python linter is showing me 11 errors in this code, but I ran the server, 
# visited from my browser, and everything seemed to work. Almost certainly a VSCode Issue. 
from flask import Flask

app = Flask(__name__)

@app.route("/") #Landing page route
def home():
    return "Cheese Cheese Cheese"

@app.route("/about") #about page route
def aboutpage():
    return "In the eighties, the cheese lobbies took hold of the government when demand for milk fell" 

@app.route("/action") #action page route
def action():
    return "Call your local senator to stop big cheese"

if __name__ == "__main__":
    app.run(debug=True)