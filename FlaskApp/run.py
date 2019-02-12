from flask import Flask, render_template, request  # , json
from time import sleep
import threading
import sys


app = Flask(__name__)

test_flag = False  # Acts as an ON/OFF switch for an IoT function


@app.before_first_request
def looping_thread():
    '''
        Runs before first request is processed.
    '''
    def run():
        global test_flag
        while True:
            # With if statements, all IoT apps can be installed here
            if test_flag:  # while test_flag?
                print("test_flag is ON")

            sleep(1)

    thread = threading.Thread(target=run)
    thread.start()


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/test', methods=['GET'])
def test():
    global test_flag
    if request.args['status'] == '1':
        test_flag = True
        print('test_flag is ON')
    elif request.args['status'] == '0':
        test_flag = False
        print('test_flag is OFF')
    else:
        print('Invalid Request')
        return 'Invalid Request'
    return 'API Executed'


@app.route('/audio-reactive-led-strip')
def visualization():
    '''
        API endpoint for Audio Reactive LED Strip
    '''
    try:
        from scripts import visualization
    except:
        print('Something went wrong')
        # Return failure message

    return ''  # Return a success message


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
