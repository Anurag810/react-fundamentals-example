import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)

      //mostly used in functional conmponent
      this.inputRef = React.createRef()

      //old method
      this.cbRef = null
      this.setcbRef = element => {
          this.cbRef = element
      }

    }

    componentDidMount () {
        if (this.cbRef) {
            this.cbRef.focus()
        }

        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }
       

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

  render() {
    return (
      <div>
          <input type="text" ref={this.inputRef}></input>
          <input type="text" ref={this.setcbRef}></input>
          <button onClick={this.clickHandler}> Click Here </button>
      </div>
    )
  }
}

export default RefsDemo