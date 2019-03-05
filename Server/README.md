# RaspberryPi Web Server
With NGINX installed on a RaspberryPi, this space efficient web server can be implemented in a variety of locations around the house. Connect it to a local network via Ethernet or Wi-Fi and it is accessible via a static IP address.

> NOTE: This project is still under development. The fundamental concept is complete but a few of its features are not fully implemented.

## Installations
* [Nginx (RaspberryPi/Linux System)](https://www.nginx.com/)
* [Gunicorn (RaspberryPi/Linux System)](https://gunicorn.org/)
* [Supervisor (RaspberryPi/Linux System)](http://supervisord.org/)

### Web Server Config Files
    /Server

These files are for the RaspberryPi's web server. For this project, a RaspberryPi was used, but any system running a version of Linux will work as well.

* `nginx.conf` is used to configure the Nginx server for authentication, file locations, and application proxies
* `dhcpcd.conf` is used to configure a static IP address which is helpful for both developer access (SSH) and user access (Browser Interface, REST API)
* `supervisor.conf` is used to configure Supervisor, which is used to automatically start the Flask server upon bootup
* `.htpasswd` is used to store the user authentication information

## Contributors

* [Gabriel Flores](https://github.com/rgabeflores) - [LinkedIn](https://www.linkedin.com/in/rgabrielflores/)

> This repository includes a modified version of [Audio Reactive LED Strip](https://github.com/scottlawsonbc/audio-reactive-led-strip) as a sample API endpoint function
