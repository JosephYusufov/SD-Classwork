from flask import Flask, render_template

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

coll = [1, 1, 2, 3, 5, 8]

@app.route('/coll')
def collection():
    return render_template('foist.html', coll = coll)

if __name__ == "__main__":
    app.run(debug=True)