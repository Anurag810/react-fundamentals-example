import React, { Component } from 'react'
import Bye from './Bye'
import MemoComponent from './MemoComponent'
import PureComp from './PureComp'

 class ParentComp extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: 'anurag'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "anurag"
        })}, 2000)
        
    }

    render() { 
        console.log("parentComp ****************")
        return (
            <div>
            ParentComp
            <MemoComponent name={this.state.name} /> 
            {/* <Bye name={this.state.name}/>  this was for Pure component
            <PureComp name={this.state.name}/> */}
            </div>
        )
  }
}

export default ParentComp