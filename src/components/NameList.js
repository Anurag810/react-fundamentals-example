import React from 'react'

export default function NameList() {
    const names = ["Batman", "Superman", "Wonderwoman"]
    const nameList = names.map((name, index) => <h2 key={index} >{name}</h2>)
  return <div>{nameList}</div>
}
