import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render(props) {
    console.log("pureComp")
    return (
      <div>PureComponent {this.props.name}</div>
    )
  }
}

export default PureComp