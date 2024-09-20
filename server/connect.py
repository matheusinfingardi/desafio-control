from flask import Flask, jsonify
from flask_cors import CORS  # Importa a biblioteca flask-cors
import asyncio
from mavsdk import System  # Certifique-se de importar mavsdk corretamente

app = Flask(__name__)
CORS(app)  # Habilita CORS para todas as rotas e todas as origens

# Criar uma instância do sistema MAVSDK
drone = System()

@app.route('/connect', methods=['POST'])
def connect_drone():
    try:
        asyncio.run(drone.connect(system_address="udp://:14550"))  # Altere o endereço conforme necessário
        return jsonify({"status": "success", "message": "Conectado ao drone com sucesso!"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)  # Garanta que o backend está rodando na porta 5000
