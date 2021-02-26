/* eslint-disable prefer-destructuring */
/*
 * Require
 */
const express = require('express');
const Server = require('http').Server;
const socket = require('socket.io');

/*
 * Initialise
 */
const app = express();
const server = Server(app);
const io = socket(server);
const port = 3001;

/*
 * Socket.io
 */

io.on('connection', (socketio) => {
  console.log('>> socket.io - connected');
  socketio.emit('your id', socketio.id);
  socketio.on('send message', (body) => {
    io.emit('message', body);
  });
});

/*

/*
 * Server
 */
server.listen(port, () => {
  console.log(`listening on *:${port}`);
});
