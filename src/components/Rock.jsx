import React from 'react'

const Rock = (props) => {
  return (
    <div>
      <li>
        <img src={props.image} />
        <header>{props.bandName}</header>
        <p>{props.information}}</p>
      </li>
    </div>
  )
}

export default Rock
