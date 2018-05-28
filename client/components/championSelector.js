import React, { Component } from 'react'

import { Button } from '@blueprintjs/core'
import champions from './champions.json'
import { sendData } from '../lib/socket/socket';

const DATA_TYPE = 'champion-matchup'

export class ChampionSelector extends Component {

    constructor() {
        super()
        this.state = {}
    }

    onClick = () => {
        sendData(
            DATA_TYPE, 
            {
                firstChamp:  this.state.firstChamp, 
                secondChamp: this.state.secondChamp
            }
        )
    }

    render() {
        return (
            <div className='flex-row'>
                <span>My Champ</span>
                <select name="First Champ" onChange={console.log}>
                    {_.forIn(champions.data, (champion, name) => {
                        console.log(champion.key, name, typeof champion.key)
                        return <option value={champion.key} key={champion.key}>{name}</option>
                    })}
                </select>
                <span>Enemy Champ</span>
                <select name="Second Champ" onChange={console.log}>
                    {_.forIn(champions.data, (champion, name) => {
                        return <option value={champion.key} key={champion.key}>{name}</option>
                    })}
                </select>
                <Button onClick={this.onClick}>Send</Button>
            </div>
        )
    }

}

export default ChampionSelector
