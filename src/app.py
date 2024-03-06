# app.py
from flask import Flask, request, jsonify
from gallery import add_to_gallery, add_to_admin_gallery

app = Flask(__name__)

@app.route('/api/gallery/add', methods=['POST'])
def add_to_gallery_route():
    image_data = request.get_data()
    add_to_gallery(image_data)
    return jsonify({'message': 'Image added to gallery'}), 200

@app.route('/api/admin/gallery/add', methods=['POST'])
def add_to_admin_gallery_route():
    image_data = request.get_data()
    add_to_admin_gallery(image_data)
    return jsonify({'message': 'Image added to admin gallery'}), 200

if __name__ == '__main__':
    app.run(debug=True)


    # gallery.py

def add_to_gallery(image_data):
    # Logic for adding image to the gallery
    pass

def add_to_admin_gallery(image_data):
    # Logic for adding image to the admin gallery
    pass

