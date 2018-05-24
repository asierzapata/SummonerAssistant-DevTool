// Dependencies
import React from 'react'
import _ from 'lodash'

// Styles
import './styles/app.css'

// Components
import { Button } from '@blueprintjs/core'
import { SocketLauncher } from './components/socketLauncher';

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            socket : undefined
        }
    }

    render() {
        return (
            <div>
                <h1>Summoner Assistant DevTools</h1>
                <div className='main'>
                    <SocketLauncher isOpen={!_.isUndefined(this.state.socket)}/>
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