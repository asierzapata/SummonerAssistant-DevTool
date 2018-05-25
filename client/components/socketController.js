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

    socketServerAction = (next) => {
        if(this.state.isOpen) {
            stopSocketServer()
            this.setState({ isOpen : false })
            return 
        }
        initSocketServer()
        bindOnConnection((socket) => {
            console.log('>>>>> Client connected')
            bindSocketEvents(socket, this.eventsBinding)
        })
        this.setState({ isOpen : true })
    }

    setIsOnChampionSelect = (isOnChampionSelect) => {
        this.setState({ isOnChampionSelect })
    }

    sendData = (type, data) => {
        // Wrapper for future additions
        sendData(type, data)
    }

    render() {
        return this.props.children(this.socketServerAction, this.setIsOnChampionSelect, this.sendData, this.state.isOpen)
    }
}

export default SocketController


