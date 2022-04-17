import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './userContext'

class ComponentB extends Component {
    static contextType = UserContext
    render() {
        return (
            <div>
                {this.context}
                <ComponentC></ComponentC> 
            </div>

        )
    }
}

// ComponentB.contextType = UserContext

export default ComponentB