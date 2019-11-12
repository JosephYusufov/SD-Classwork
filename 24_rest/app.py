#Joseph Yusufov, David Wang
#SoftDev1 pd2
#REST -- My First REST API app
#2019-11-13

from flask import Flask, render_template
import urllib3
import json

app = Flask(__name__) #create instance of class Flask
http = urllib3.PoolManager() #create instance of PoolManager to make secure requests

@app.route("/") #assign following fxn to run when root route requested
def hello_world():
    r = http.request( 'GET',
        "https://api.nasa.gov/planetary/apod?api_key=tSwi6wYGUCb8vdzY9VMiCu0au0FcaA8foOpsh98y"
    )
    data = json.loads(r.data)
    print(data[url])
    return render_template("index.html", pic = data[url])

if __name__ == "__main__":
    app.debug = True
    app.run()

