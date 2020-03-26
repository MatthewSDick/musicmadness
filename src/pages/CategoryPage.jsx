import React from 'react'
import data from '../data/bands.json'
import Category from '../components/Category'

const CategoryPage = (props) => {
  const category = props.match.params.category
  const pageData = data.musics[category]
  console.log(pageData)
  return (
    <>
      <h1>Bands for {category}</h1>
      <ul>
        {pageData.band.map((band) => {
          return (
            <Category
              image={band.image}
              bandName={band.name}
              album={band.album}
            />
          )
        })}
      </ul>
    </>
  )
}

export default CategoryPage

{
  /* <img src={props.image} />
<header>{props.bandName}</header>
<p>{props.album}}</p> */
}
