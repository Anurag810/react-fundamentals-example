import React, { Component } from "react";

class Bye extends Component {
    render() {
        console.log("RegularComp")
        return <h2>Bye, {this.props.name}</h2>
    }
}

export default Bye