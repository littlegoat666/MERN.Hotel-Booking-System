import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import SpecialOffers from '../components/SpecialOffers'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedDestination />
            <SpecialOffers />
            <Testimonial />
            <NewsLetter />
        </>
    )
}

export default Home