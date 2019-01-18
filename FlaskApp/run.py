from flask import Flask, render_template, request  # , json
from time import sleep
import threading
import sys


app = Flask(__name__)

test_flag = False # Acts as an ON/OFF switch for IoT function


@app.before_first_request
def test_thread():
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
    return 'test() called'


'''
    # Cases on toggle click
    if TOGGLED_ON
        if ALREADY_ON:
            return flag("Already ON")
        if NOT_ON:
            if SUCCESSFUL:
                return flag("Successfully turned on")
            if UNSUCCESSFUL:
                <toggle switch back to original state> # executed by JavaScript in UI
                return flag("Unsuccessful")
    if TOGGLED_OFF:
        if ALREADY_OFF:
            return flag("Already ON")
        if NOT_ON:
            if SUCCESSFUL:
                return flag("Successfully turned off")
            if UNSUCCESSFUL:
                <toggle switch back to original state> # executed by JavaScript in UI
                return flag("Unsuccessful")

'''


@app.route('/visualization')
def visualization():
    try:
        import visualization
    except:
        print('Something went wrong')
        # Return failure message

    return ''  # Return success message


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
