// Dependencies
import React from 'react'

// Components
import { Button } from '@blueprintjs/core'

// Styles
import './styles/app.css'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            socket : {
                isOpen: false,
                instance : undefined
            }
        }
    }

    render() {
        const socketCircleClass = 'circle ' + (this.state.socket.isOpen ? 'circle-up' : 'circle-down')
        const socketButtonText = this.state.socket.isOpen ? 'Boot' : 'Stop'
        return (
            <div>
                <h1>Summoner Assistant DevTools</h1>
                <div className='main'>
                    <div className='flex-row'>
                        <div className='button-label'>Socket.io server</div>
                        <Button>{socketButtonText}</Button>
                        <div className={socketCircleClass}></div>
                    </div>
                    { this.state.socket.isOpen ? 
                        renderMain()
                        :
                        null
                    }
                </div>
            </div>
        )
    }

    renderMain() {
        return (
            <div>

            </div>
        )
    }

}

export default App