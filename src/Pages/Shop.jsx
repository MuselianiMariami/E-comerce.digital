import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/popular/Popular'
import Offers from '../Components/offers/Offers'
import NewCollections from '../Components/newCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero></Hero>
      <Popular></Popular>
      <Offers></Offers>
      <NewCollections></NewCollections>
      <NewsLetter></NewsLetter>
    </div>
  )
}

export default Shop
