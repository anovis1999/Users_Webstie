from flask import request
import flask
from functions import insert_mongo, update_group_mail_in_db, build_mail_tree
import json, ast

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
    update_group_mail_in_db(data)
    print data
    return "success"


@app.route('/mailtree', methods=['GET', 'POST'])
def load_mail_tree():
    mail_tree = build_mail_tree()
    mail_tree = ast.literal_eval(json.dumps(mail_tree))
    mail_tree = str(mail_tree)
    mail_tree = mail_tree.replace("'","\"")
    print mail_tree
    return str(mail_tree)



app.run()