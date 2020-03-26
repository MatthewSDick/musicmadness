import React from 'react'

const Category = (props) => {
  return (
    <div>
      <li>
        <img src={props.image} />
        <header>{props.bandName}</header>
        <p>{props.album}</p>
      </li>
    </div>
  )
}

export default Category
