# IoT Controller
Build an IoT controller using a RaspberryPi web server with Flask REST API on Nginx, Gunicorn, and Supervisor. Easily create API endpoints to install and control a local network of devices. The controller can be used with its default browser interface or any application capable of sending HTTP requests.

> NOTE: This project is still under development. The fundamental concept is complete but a few of its features are not fully implemented.

## Installations
* [Flask (Python)](http://flask.pocoo.org/docs/1.0/)
* [Nginx](https://www.nginx.com/)
* [Gunicorn](https://gunicorn.org/)
* [Supervisor](http://supervisord.org/)

### Web Server Config Files
    /Server

These files are for the RaspberryPi's web server. For this project, a RaspberryPi was used, but any system running a version of Linux will also work.

* `nginx.conf` is used to configure the Nginx server for authentication, file locations, and application proxies
* `dhcpcd.conf` is used to configure a static IP address which is helpful for both developer access (SSH) and user access (Browser Interface, REST API)
* `supervisor.conf` is used to configure Supervisor, which is used to automatically start the Flask server upon bootup
* `.htpasswd` is used to store the user authentication information


### Flask App Files
    /FlaskApp

These files are for the Flask API and web interface.

* HTML, CSS, and Javascript is used with Bootstrap to create a simple, mobile friendly browser interface
* Flask is used to provide the REST API

> This repository includes a modified version of [Audio Reactive LED Strip](https://github.com/scottlawsonbc/audio-reactive-led-strip) as an example of an API endpoint function


## Contributors

* [Gabriel Flores](https://github.com/rgabeflores) - [LinkedIn](https://www.linkedin.com/in/rgabrielflores/)
