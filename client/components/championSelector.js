import React, { Component } from 'react'

import { Button } from '@blueprintjs/core'
import champions from '../lib/staticData/champions'
import { sendData } from '../lib/socket/socket';
import { stat } from 'fs';

const DATA_TYPE = 'champion-matchup'

export class ChampionSelector extends Component {

    constructor() {
        super()
        this.state = {}
    }

    onClick = () => {
        console.log(this.state)
        sendData(
            DATA_TYPE, 
            {
                firstChamp:  this.state.firstChamp, 
                secondChamp: this.state.secondChamp
            }
        )
    }

    onChange = (event) => {
        let champion = event.target.value
        let name = event.target.name
        let state = this.state
        state[name] = champion
        this.setState(state)
    }

    render() {
        return (
            <div className='flex-col'>
                <div className='flex-row space-between'>
                    <span>My Champ</span>
                    <select name="firstChamp" onChange={this.onChange}>
                        <option>-</option>
                        {_.map(champions, (champion, index) => {
                            return <option value={index} key={index}>{champion.name}</option>
                        })}
                    </select>
                </div>
                <div className='flex-row space-between'>
                    <span>Enemy Champ</span>
                    <select name="secondChamp" onChange={this.onChange}>
                        <option>-</option>
                        {_.map(champions, (champion, index) => {
                            return <option value={index} key={index}>{champion.name}</option>
                        })}
                    </select>
                </div>
                <Button onClick={this.onClick}>Send</Button>
            </div>
        )
    }

}

export default ChampionSelector
