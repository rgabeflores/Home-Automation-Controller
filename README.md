# Home Automation Controller
Build a home automation controller using a RaspberryPi web server with Flask REST API on Nginx, Gunicorn, and Supervisor. Easily create API endpoints to install and have control of a local network of devices through one edge device. The controller can be used with its default browser interface or an application capable of making HTTP requests.

> NOTE: This project is still under development. The fundamental concept is complete but a few of its features are not yet fully implemented.

## Installations
* [Flask (Python)](http://flask.pocoo.org/docs/1.0/)
* [Nginx (RaspberryPi/Linux System)](https://www.nginx.com/)
* [Gunicorn (RaspberryPi/Linux System)](https://gunicorn.org/)
* [Supervisor (RaspberryPi/Linux System)](http://supervisord.org/)
* [ReactNative (Mobile Client)](https://facebook.github.io/react-native/)
* [Redux (Mobile Client)](https://redux.js.org/)

### Web Server Config Files
    /Server

These files are for the RaspberryPi's web server. For this project, a RaspberryPi was used, but any system running a version of Linux will work as well.

* `nginx.conf` is used to configure the __NGINX__ server for authentication, file locations, and application proxies
* `dhcpcd.conf` is used to configure a static IP address which is helpful for both developer access (SSH) and user access (Browser Interface, REST API)
* `supervisor.conf` is used to configure __Supervisor__, which is used to automatically start the Flask server upon bootup
* `.htpasswd` is used to store the user authentication information


### Flask App Files
    /FlaskApp

These files are for the Flask API and web interface.

* __HTML__, __CSS__, and __Javascript__ is used with [Bootstrap](https://getbootstrap.com/) to create a simple, mobile friendly browser interface
* __Flask__ is used to create the __REST API__ endpoints


### React Native Files
    /MobileClient

These files are for the mobile client which is built with __React Native__ to design the UI/UX and  __Redux__ to maintain the state of the application.

> NOTE: This part of the application is in early development and many of its features are yet to be implemented.

## Contributors

* [Gabriel Flores](https://github.com/rgabeflores) - [LinkedIn](https://www.linkedin.com/in/rgabrielflores/)

> This repository includes a modified version of [Audio Reactive LED Strip](https://github.com/scottlawsonbc/audio-reactive-led-strip) as a sample API endpoint function
