import React, { Component } from 'react'

export class ClickCountertwo extends Component {
    render() {
        return (
            <button onClick={this.props.incrementCount}>Click {this.props.count} Times</button>
        )
    }
}

export default ClickCountertwo