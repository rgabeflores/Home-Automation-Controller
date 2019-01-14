from flask import Flask, render_template  # , json
import sys


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/test')
def test():
    try:
        import scripts  # /scripts/__init__.py
    except:
        print('Something went wrong.')
    return ''


@app.route('/visualization')
def visualization():
    try:
        import visualization
    except:
        print('Something went wrong')
    return ''


if __name__ == '__main__':
    app.run(debug=True)
