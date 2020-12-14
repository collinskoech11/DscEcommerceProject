import React from 'react';
import General from './productsPage/General';
import CarouselPage from '../Navigators/CarouselPage';
import Pages from './Pages';




export default function Home() {
    return (
        <div>
        <CarouselPage/>
        <General/>
        <Pages/>
        </div>
    )
}
