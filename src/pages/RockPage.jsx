import React from 'react'
import Rock from '../components/Rock'

const RockPage = () => {
  return (
    <>
      <h1>Rock bands from the 80's</h1>
      <h2>Still good music.</h2>
      <ul>
        <Rock
          image="./images/u2.jpg"
          bandName="U2"
          information="Some information about the band."
        />
        <Rock
          image="./images/Aerosmith.jpg"
          bandName="Aerosmith"
          information="Some information about the band."
        />
        <Rock
          image="./images/rush.jpg"
          bandName="Rush"
          information="Some information about the band."
        />
      </ul>
    </>
  )
}

export default RockPage
