from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  

API_KEY = '73cc44eaae4d46dca89195102251306'  # reemplaza con tu clave

@app.route('/weather', methods=['GET'])
def get_weather():
    city = request.args.get('city')
    if not city:
        return jsonify({'error': 'No city provided'}), 400

    url = f"http://api.weatherapi.com/v1/current.json?key={API_KEY}&q={city}&lang=es"

    try:
        response = requests.get(url)
        data = response.json()

        if "error" in data:
            return jsonify({'error': data["error"]["message"]}), 400

        return jsonify(data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
