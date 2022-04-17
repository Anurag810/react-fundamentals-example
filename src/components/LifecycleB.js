import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: "anurag"
        }
        console.log("B Constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("B getDerivedStateFromProps")
        return null
    }
    shouldComponentUpdate() {
        console.log("B shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log("B getSnapshotBeforeUpdate") 
        return null
    }
    componentDidUpdate() {
        console.log("B componentDidUpdate(")
    }
    
    render() {
        console.log('B render')
        return (
            <div>LifecycleB</div>
        )
    }
    componentDidMount() {
        console.log("B componentDidMount")
    }
}

export default LifecycleB