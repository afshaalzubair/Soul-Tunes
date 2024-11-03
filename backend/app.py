# app.py
from flask import Flask, jsonify, render_template
from flask_cors import CORS
import os 

app = Flask(__name__)
CORS(app)  # This allows cross-origin requests

app.config['CLIENT_ID'] = os.getenv('CLIENT_ID', 'defaultclient_id')
app.config['CLIENT_SECRET'] = os.getenv('CLIENT_SECRET', 'default_client_secret')
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'default_secret_key')

@app.route('/')
def home():
    # return render_template('index.html')
    data = {"message": "Hello from Flask!", "value": 42}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)