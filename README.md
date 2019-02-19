<div align="center"><a href="https://icaruslabs.io"><img src="https://icaruslabs.io/images/logo-gold.png" alt="Icarus Labs" width="350"/></a> 

[![Version](https://img.shields.io/badge/Download-v1.0.0-brightgreen.svg "Version")](https://github.com/icaruslabs/icarus-dashboard/releases/tag/v1.0.0) [![MIT License](https://img.shields.io/badge/License-MIT-blue.svg "MIT License")](https://github.com/icaruslabs/icarus-dashboard/blob/master/LICENSE) [![Support](https://img.shields.io/badge/Support-red.svg "Support")](https://icaruslabs.io/contact/#support)

Icarus Dashboard is an open source MacOS [cPanel](https://www.cpanel.net/) client built for the customers of [Icarus Labs](https://icaruslabs.io).</div><br>

## Getting Started
To install Icarus Dashboard on a MacOS device, please download the zip file in our [latest release](https://github.com/icaruslabs/icarus-dashboard/releases). The extracted folder contains the application, which you should move in your Applications folder. You must have Icarus Labs cPanel credentials to use Icarus Dashboard.

#### For Developers: 
To enable developer tools, uncomment line 15 in `main.js`.

Install dependencies ([node](https://github.com/nodejs/node), [npm](https://github.com/npm/cli), [electron](https://github.com/electron/electron), [electron-packager](https://github.com/electron-userland/electron-packager)):
```
$ npm install
```
Start the application:
```
$ npm start
```
 
Build the application for MacOS:
```
$ npm run package-mac
```
<br>

## Screenshots
![Login Screenshot](https://icaruslabs.io/images/screenshots/dashboard/login.png)
![Dashboard Screenshot](https://icaruslabs.io/images/screenshots/dashboard/dashboard.png)
![Databases Screenshot](https://icaruslabs.io/images/screenshots/dashboard/database.png)
![Subdomains Screenshot](https://icaruslabs.io/images/screenshots/dashboard/subdomains.png)
![Email Accounts Screenshot](https://icaruslabs.io/images/screenshots/dashboard/emails.png)

## Credits
Copyright (c) [Icarus Labs](https://icaruslabs.io), 2018-2019. Released under the [MIT license](https://github.com/icaruslabs/icarus-desktop/blob/master/LICENSE). Developed by [seb646](https://github.com/seb646) using [Electron](https://electronjs.org).
