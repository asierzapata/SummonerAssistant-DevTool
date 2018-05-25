const _          = require('lodash')
const app        = require('express')();
const http       = require('http').Server(app)
const socketIo   = require('socket.io')
const events     = require('./events')

let socketServer = undefined

http.listen(8000, function(){
  console.log('listening on *:8000');
});

export const initSocketServer = () => socketServer = socketIo(http, { serveClient: false })

export const stopSocketServer = () => socketServer.close()

export const sendData = (type, data) => socketServer.emit(events[type], data)

export const bindOnConnection = (callback) => socketServer.on('connect', callback)

export const bindSocketEvents = (socket,callbacksObject) => _.forIn(callbacksObject, (callback, type) => socket.on(events[type], callback))