from flask import request
import flask
from functions import insert_mongo
import json

app = flask.Flask("__main__")

@app.route("/")
def my_index():
    return flask.render_template("index.html", token="hello flask+react")


@app.route('/', methods=['GET', 'POST'])
def sign_in():
    data = request.data
    print data
    return data

@app.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    data = request.data
    print data
    data = json.loads(data)
    insert_mongo(data)
    return "success"


@app.route('/mail', methods=['GET', 'POST'])
def add_mail_group():
    data = request.data
    data = json.loads(data)
    print data
    return "success"

app.run(debug=True)