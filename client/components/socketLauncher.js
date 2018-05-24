import React, { Component } from 'react'

export class SocketLauncher extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: this.props.isOpen
        }
    }

    handleSocketAction() {
        
    }

    render() {
        const socketCircleClass = 'circle ' + (this.state.isOpen ? 'circle-up' : 'circle-down')
        const socketButtonText = this.state.isOpen ? 'Boot' : 'Stop'
        return (
            <div className='flex-row'>
                <div className='button-label'>Socket.io server</div>
                <Button onClick={this.handleSocketAction}>{socketButtonText}</Button>
                <div className={socketCircleClass}></div>
            </div>
        )
    }
}

export default SocketLauncher
