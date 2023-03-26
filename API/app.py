import os
from flask import Flask, request, jsonify


import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate("path/to/serviceAccountKey.json")
firebase_admin.initialize_app(cred)


app = Flask(__name__)


@app.route('/', methods=['GET'])
def test():
    if request.method == "GET":
        return jsonify({"response": "Get Request Called"})
    
if __name__ == '__main__':
    app.run(debug=True)