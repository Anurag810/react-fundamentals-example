import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: "anurag"
        }
        console.log("A Constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log(" A getDerivedStateFromProps")
        return null
    }
    shouldComponentUpdate() {
        console.log("A shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log("A getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate() {
        console.log("A componentDidUpdate(")
    }
    changeState = () =>{
        this.setState({
            name: "Laksh Mishra"
        })
    }
    render() {
        console.log('A render')
        return (
            <div>
                LifecycleA
                <button onClick={this.changeState}>changeState</button>
                <LifecycleB/>
            </div>
        )
    }
    componentDidMount() {
        console.log(" A componentDidMount")
    }
}

export default LifecycleA