import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true
      }
    }
  render() {
    // Short Circuit operator
    return this.state.isLoggedIn && <div>Welcome Vishwass</div>

    // Ternary conditional operator

    // return this.state.isLoggedIn ? (
    //     <div>Welcome Vishwas</div>
    // ) : (
    //     <div>Welcome Guest</div>
    // )

    // Element Variables

    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Vishwas</div>
    // } else {
    //    message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>


    // If/else

    // if (this.state.isLoggedIn) {
    //     return (
    //         <div>
    //             <div>Welcome Vishwas</div>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <div>Welcome Guest</div>
    //             <div>welcome vishwass</div>
    //         </div>
    //     )
    // }

    
  }
}

export default UserGreeting