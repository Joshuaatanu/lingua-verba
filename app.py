from flask import request, jsonify


@app.route('/translate', methods=['POST'])
def translate():
    if request.method == 'POST':
        data = request.get_json()
        text = data.get('text', '')  # Changed from 'english-text' to 'text'
        source_lang = data.get('source', 'English')
        target_lang = data.get('target', 'Igala')

        # Add logging to debug
        print(
            f"Received translation request: {text} ({source_lang} -> {target_lang})")

        translated_text = translate_model(text)
        print(f"Translation result: {translated_text}")

        return jsonify({
            "status": "success",
            "translated_text": translated_text
        })

    return jsonify({"status": "error", "message": "Invalid request method"})


@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type,Authorization'
    response.headers['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE'
    return response
