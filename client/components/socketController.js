import { 
    initSocketServer, 
    stopSocketServer, 
    sendData, 
    bindOnConnection, 
    bindSocketEvents
} from '../lib/socket/socket'

import React, { Component } from 'react'

export class SocketController extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false,
            isOnChampionSelect: false,
        }
        this.eventsBinding = {
            'is-in-champion-select' : () => this.state.isOnChampionSelect
        }
    }

    socketServerAction(next) {
        if(this.state.isOpen) {
            stopSocketServer()
            return 
        }
        initSocketServer()
        bindOnConnection((socket) => {
            bindSocketEvents(socket, this.eventsBinding)
        })
    }

    setIsOnChampionSelect(isOnChampionSelect) {
        this.setState({ isOnChampionSelect })
    }

    sendData(type, data) {
        // Wrapper for future additions
        sendData(type, data)
    }

    render() {
        this.props.children(socketServerAction, this.setIsOnChampionSelect, this.sendData, this.state.isOpen)
    }
}

export default SocketController


