import React from 'react'

const Rap = (props) => {
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

export default Rap
