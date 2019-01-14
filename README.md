# RaspberryPi-IoT-Controller-with-Flask
An IoT web server on a RaspberryPi made from Flask REST API on Nginx, Gunicorn, and Supervisor

## Installations
* Python (Flask)
* Nginx
* Gunicorn
* Supervisor

### Web Server Config Files
    /Server

These files are for the RaspberryPi's web server.

* nginx.conf is used to configure the Nginx server for authentication, file locations, and application proxies
* dhcpcd.conf is used to configure a static IP address which is helpful for both developer access (SSH) and user access (Browser Interface, REST API)
* supervisor.conf is used to configure Supervisor, which is used to automatically start the Flask server upon bootup


### Flask App Files
    /FlaskApp

Includes a slightly modified version of https://github.com/scottlawsonbc/audio-reactive-led-strip as one example of IoT functions
