import React from 'react'
import Rap from '../components/Rock'

const RapsPage = () => {
  return (
    <>
      <h1>Rap bands from the 80's</h1>
      <h2>Not really good music any more.</h2>
      <ul>
        <Rap
          image="./images/u2.jpg"
          bandName="U2"
          information="Some information about the band."
        />
        <Rap
          image="./images/Aerosmith.jpg"
          bandName="Aerosmith"
          information="Some information about the band."
        />
        <Rap
          image="./images/rush.jpg"
          bandName="Rush"
          information="Some information about the band."
        />
      </ul>
    </>
  )
}

export default RapsPage
