import React, { Component } from 'react'

import { Button } from '@blueprintjs/core'

export class TogglePair extends Component {
    
    render() {
        const { title, isOpen, onClick, openText, closedText } = this.props
        const circleClass = 'circle ' + (isOpen ? 'circle-up' : 'circle-down')
        const buttonText = isOpen ? openText : closedText
        return (
            <div className='flex-row'>
                <div className='button-label'>{title}</div>
                <Button onClick={onClick}>{buttonText}</Button>
                <div className={circleClass}></div>
            </div>
        )
    }
}

export default TogglePair
