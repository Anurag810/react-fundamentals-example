import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
        {/* <button onlick={props.greetHandler}>Greet parent</button> */}
        <button onClick={() => props.greetHandler("child")}>Greet parent</button>
    </div>
  )
}
