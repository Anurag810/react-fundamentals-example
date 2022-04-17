import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          username: '',
          comments: ''
      }
    }

    handleInputChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleTextAreaChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`i am here`)
        event.preventDefault()
    }


  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>username</label>
                <input type='text' value={this.state.username} onChange={this.handleInputChange}></input>
            </div>
            <div>
                <label>Comments</label>
                <textarea value={this.state.comments} onChange={this.handleTextAreaChange}></textarea>
            </div>
            <button>Submit</button>
        </form>
    )
  }
}

export default Form