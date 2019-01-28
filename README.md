# IoT Controller
Build an IoT controller using a RaspberryPi and a web server with Flask REST API on Nginx, Gunicorn, and Supervisor.
Easily create API endpoints to install and control a local network of devices through an application interface.
The controller can be used with its default browser interface or any application capable of sending HTTP requests.


## Installations
* Python (Flask)
* Nginx
* Gunicorn
* Supervisor

### Web Server Config Files
    /Server

These files are for the RaspberryPi's web server. For this project, a RaspberryPi was used, but any system running a version of Linux will also work.

* __nginx.conf__ is used to configure the Nginx server for authentication, file locations, and application proxies
* __dhcpcd.conf__ is used to configure a static IP address which is helpful for both developer access (SSH) and user access (Browser Interface, REST API)
* __supervisor.conf__ is used to configure Supervisor, which is used to automatically start the Flask server upon bootup
* __.htpasswd__ is used to store the user authentication information


### Flask App Files
    /FlaskApp

These files are for the Flask API and web interface.

* HTML, CSS, and Javascript is used with Bootstrap to create a simple, mobile friendly browser interface
* Flask is used to provide the REST API

___This repository includes a modified version of [Audio Reactive LED Strip](https://github.com/scottlawsonbc/audio-reactive-led-strip) as an example of an API endpoint function___
