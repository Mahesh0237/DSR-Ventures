import React from 'react'
import Header from '../components/shared/Header'
import Banner from '../components/homewrapper/Banner'
import Projectswrapper from '../components/homewrapper/Projectswrapper'
import Footer from '../components/shared/Footer'
function Homepage() {
    return (
        <div className="body-wrapper">
            <Header />
            <Banner />
            <Projectswrapper />
            <Footer />
        </div>
    )
}

export default Homepage