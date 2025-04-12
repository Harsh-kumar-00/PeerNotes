from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Study Material Sharing Platform Backend is Running!"

if __name__ == '__main__':
    app.run(debug=True)
