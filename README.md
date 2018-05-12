# Spotify Searcher in Angular

## App Info

Spotify Searcher App (First App in Angular / Angular-CLI / Bootstrap)

![How-app-works](https://media.giphy.com/media/g0ypNBocmy6mfVFN9k/giphy.gif)

## Configuration

In folder server you need to add these things from Spotify API

``` bash
var client_id = 'CLIENT_ID'; // Your client id
var client_secret = 'CLIENT_SECRET'; // Your secret
var redirect_uri = 'REDIRECT_URI'; // Your redirect uri
```

In order to run the different examples, open the folder with the name of the flow you want to try out, and run its `app.js` file. For instance, to run the Authorization Code example do:
``` bash
$ cd authorization_code
$ node app.js
```
In folder client you need to add your access token. You can get it when you open page About and click on Log to Spotify. Page send you to 
`http://localhost:8888` in a browser. Then we you log to your spotify account you can get your own access token.

## Quick Start

``` bash
# Build for production and open hot-reload in browser
ng serve --o
```
