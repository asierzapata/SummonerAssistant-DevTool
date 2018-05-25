// Dependencies
import React from 'react'
import _ from 'lodash'

// Styles
import './styles/app.css'

// Components
import { Button } from '@blueprintjs/core'
import { SocketController } from './components/socketController';

class App extends React.Component {

    constructor() {
        super()
    }


    render() {
        return (
            <div>
                <h1>Summoner Assistant DevTools</h1>
                <SocketController>
                    {(socketServerAction, setIsOnChampionSelect, sendData, isOpen) => {
                        console.log(`>>>>> isOpen ${isOpen}`)
                        const socketCircleClass = 'circle ' + (isOpen ? 'circle-up' : 'circle-down')
                        const socketButtonText = isOpen ? 'Stop' : 'Boot'
                        return (
                            <div className='main'>
                                <div className='flex-row'>
                                    <div className='button-label'>Socket.io server</div>
                                    <Button onClick={() => socketServerAction(this.props.setSocket)}>{socketButtonText}</Button>
                                    <div className={socketCircleClass}></div>
                                </div>
                                { isOpen ? 
                                    this.renderMain(sendData)
                                    :
                                    null
                                }
                            </div>
                        )
                    }}
                </SocketController>
            </div>
        )
    }

    renderMain(sendData) {
        return (
            <div>

            </div>
        )
    }

}

export default App