import datetime
import os
from flask import Flask, request, jsonify
from flask_cors import CORS


import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("serviceAccountKey.json")
firebase_app = firebase_admin.initialize_app(cred)

db = firestore.client()


app = Flask(__name__)
CORS(app)



@app.route('/', methods=['GET'])
def test():
    if request.method == "GET":
        return jsonify({"response": "Get Request Called"})

@app.route('/problem', methods=['GET', 'POST', 'DELETE'])
def problem():
    if request.method == "POST":
        data = request.get_json()
        data = data['body']
        data['datetime'] = datetime.datetime.now()
        update_time, ref = db.collection(u'problems').add(data)
        return jsonify(ref.id)
    elif request.method == "GET":
        problemid = request.args.get('problemid')
        docref = db.collection(u'problems').document(problemid)
        doc = docref.get().to_dict()
        return jsonify(doc)
    elif request.method == "DELETE":
        problemid = request.args.get('problemid')
        db.collection(u'problems').document(problemid).delete()
        return jsonify("")

@app.route('/problemlist', methods=['GET'])
def problem_list():
    docs = db.collection(u'problems').stream()
    doc_dict = {}
    for doc in docs:
        print(f'{doc.id} => {doc.to_dict()}')
        doc_dict[doc.id] = doc.to_dict()
    print(doc_dict)
    return jsonify(doc_dict)

@app.route('/solution', methods=['GET', 'POST', 'DELETE'])
def solution():
        if request.method == "POST":
            data = request.get_json()
            data = data['body']
            data['datetime'] = datetime.datetime.now()
            update_time, ref = db.collection(u'solutions').add(data)
            return jsonify(ref.id)
        elif request.method == "GET":
            solutionid = request.args.get('solutionid')
            docref = db.collection(u'solutions').document(solutionid)
            doc = docref.get().to_dict()
            return jsonify(doc)
        elif request.method == "DELETE":
            solutionid = request.args.get('solutionid')
            db.collection(u'solutions').document(solutionid).delete()
            return jsonify("")

@app.route('/solutionlist', methods=['GET'])
def solution_list():
    docs = db.collection(u'solutions').stream()
    doc_dict = {}
    for doc in docs:
        print(f'{doc.id} => {doc.to_dict()}')
        doc_dict[doc.id] = doc.to_dict()
    print(doc_dict)
    return jsonify(doc_dict)
    
if __name__ == '__main__':
    app.run(debug=True)