import React from 'react'
import WomensWear from './productsPage/WomensWear'
import CarouselPage from '../Navigators/CarouselPage'
import MensWear from './productsPage/MensWear'


export default function Home() {
    return (
        <div>
        <CarouselPage/>
        <WomensWear/>
        <MensWear/>
        </div>
    )
}
