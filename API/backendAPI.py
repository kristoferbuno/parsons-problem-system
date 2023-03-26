import os
from flask import Flask, request, jsonify


#initialize firebase...



app = Flask(__name__)


@app.route('/test', methods=['GET'])
def test():
    if request.method == "GET":
        return jsonify({"response": "Get Request Called"})
    
if __name__ == '__main__':
    app.run(debug=True, port=80)