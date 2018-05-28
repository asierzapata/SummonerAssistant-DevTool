// Dependencies
import React from 'react'
import _ from 'lodash'

// Styles
import './styles/app.css'

// Components
import { SocketController } from './components/socketController';
import { TogglePair } from './components/togglePair';
import { ChampionSelector } from './components/championSelector';

class App extends React.Component {

    constructor() {
        super()
    }


    render() {
        return (
            <div>
                <h1>Summoner Assistant DevTools</h1>
                <SocketController>
                    {(socketServerAction, isOpen, isChampionSelect, helpers) => {
                        return (
                            <div className='main'>
                                <TogglePair 
                                    isOpen={isOpen} 
                                    title="Socket.io server"
                                    openText="Stop"
                                    closedText="Boot"
                                    onClick={() => socketServerAction(this.props.setSocket)}
                                />  
                                <br/>
                                { isOpen ? 
                                    this.renderMain(isChampionSelect, helpers)
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

    renderMain(isChampionSelect, { sendData, setIsOnChampionSelect }) {
        return (
            <div>
                <TogglePair 
                    isOpen={isChampionSelect} 
                    title="Is in champion select?"
                    openText="In"
                    closedText="Not In"
                    onClick={setIsOnChampionSelect}
                />
                <div className='flex-row'>
                    <h3>Matchup</h3>
                </div>
                <ChampionSelector 
                    sendData={sendData}
                />
            </div>
        )
    }

}

export default App