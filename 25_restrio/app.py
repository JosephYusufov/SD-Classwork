#Joseph Yusufov, Alex Olteanu
#SoftDev1 pd2
#RESTRIO
#2019-11-14

from flask import Flask, render_template
import urllib
import json

app = Flask(__name__)  # create instance of class Flask


@app.route("/")  # assign following fxn to run when root route requested
def hello_world():
    return render_template("index.html")


@app.route("/rickandmorty")  
def rickandmorty():
    r = urllib.request.urlopen(
                     "https://rickandmortyapi.com/api/character/"
                     )
    data = json.loads(r.read())
    # print(data);
    print(data['results'][0])
    return render_template("rickandmorty.html", data=data)

if __name__ == "__main__":
    app.debug = True
    app.run()
