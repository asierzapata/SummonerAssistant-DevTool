import express from 'express'
import _ from 'lodash'
import http from 'http'
import socket from 'socket.io'
import events from './events'

const app = express();
const server = http.Server(app);
const socketServer

server.listen(8000, function(){
  console.log('listening on *:8000');
});

export const initSocketServer = () => socketServer = socket(server)

export const stopSocketServer = () => socketServer.server.close()

export const sendData = (type, data) => socketServer.emit(events[type], data)

export const bindOnConnection = (callback) => socketServer.on('connect', callback)

export const bindSocketEvents = (socket,callbacksObject) => _.forIn(callbacksObject, (callback, type) => socket.on(events[type], callback))