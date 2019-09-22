import csv
import random
from flask import Flask, render_template
app = Flask(__name__)

#code to read a csv and convert into dictionary
OCCUPATIONS = {}
with open('./static/occupations.csv') as csv_file:  # open CSV file
    # instantiate CSV reader object
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0  # make sure header isn't included in dictionary
    for row in csv_reader:  # populate dictionary with keys and values
        if(line_count == 0):
            line_count += 1
        else:
            OCCUPATIONS[row[0]] = float(row[1])

@app.route("/")
def hello_world():
    print(__name__)
    return "no hablo queso!"


@app.route("/index")
def index():
    return render_template("index.html")

@app.route("/occupyflaskst")
def test_tmplt():
	return render_template("index.html", OCCUPATIONS=OCCUPATIONS)


if __name__ == "__main__":
    app.debug = True
    app.run()

