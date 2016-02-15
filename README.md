#ICY e-thermostat API

A simple API to communicate with your Icy e-thermostat. I created this so I could fiddle with my e-thermostat. It currently only supports the following:

- login;
- get current and the set temperature;
- set new temperature;

## Requirements

- Node 5.x
- npm 3

## Installation

```
clone
npm install
```

## Running it

```
npm start
```
The server will be running on your localhost port 8000

## Using it
Before you can get and set temperatures. You will need to login, to do this you will need to perform a POST towards `/login` with your username and password.

After logging in successfully you will be presented some data. In this data a token and an uid will be present. You will need to use the token for both getting and setting temperature. The uid is only necessary for setting temperatures.
