from flask import Flask, jsonify
app = Flask(__name__)


@app.route('/home')
def index():
    try:
        data = "TALENT PLUS"
        return jsonify(
            {
                "success": True,
                "data": data,
            }
        )
    except:
        return jsonify({
            "success": False,
            'error': 500,
            "message": "Opps! something went wrong!"
        }), 500
