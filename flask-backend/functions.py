import pymongo
import json, ast


def connect_mongo(client,db,col):
    myclient = pymongo.MongoClient(client)
    mydb = myclient[db]
    mycol = mydb[col]
    return mycol


def insert_mongo(json):
    c = connect_mongo("mongodb://localhost:27017/","mylib","users")
    x = c.insert_one(json)
    print x


def search_emails_mongo(json):
    c = connect_mongo("mongodb://localhost:27017/", "mylib", "users")
    x = c.find(json)

    users_arr = []

    for doc in x:
        users_arr.append(doc["email"])
    return users_arr


def update_group_mail_in_db(json):
    c = connect_mongo("mongodb://localhost:27017/", "mylib", "users")

    myquery = {"email": json["email"]}
    newvalues = {"$set": {"mail_group": json["groupmail"]}}

    c.update_one(myquery, newvalues)

    return "success"


def build_mail_groups_dict():
    dic = {}
    c = connect_mongo("mongodb://localhost:27017/","mylib","mail_groups")
    x = c.find()

    for doc in x:
        mail_group = doc["email"]
        dic.update({mail_group: []})
    return dic


def build_mail_tree():
    results = []
    tree_dict ={}
    mails_group =build_mail_groups_dict()

    for mail in range(len(mails_group)):
        json = {"mail_group": mails_group.keys()[mail]}
        results.append(search_emails_mongo(json))
        a = mails_group.keys()[mail]
        a = a.encode('utf-8')
        a = results[mail]
        tree_dict.update({mails_group.keys()[mail]: a})

    print tree_dict
    return tree_dict

# build_mail_groups_dict()

# search_user_mongo({"email": "awq@gmail.com"})

# insert_mongo({"email":"awq@gmail.com","password":"MGWz7Fw88QpxwTp","name":"a","user_privilege":"member","mail_group":"","hasAgreed":"true"})