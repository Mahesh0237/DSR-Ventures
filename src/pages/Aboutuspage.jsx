import React from 'react'
import Footer from '../components/shared/Footer'
import Aboutuswrapper from '../components/aboutus/Aboutuswrapper'
import Header from '../components/shared/Header'
import Enquireyform from '../components/homewrapper/shared/Enquireyform'
function Aboutuspage() {
    return (
        <div className="body-wrapper">
            <Header />
            <Aboutuswrapper />
            <Enquireyform />
            <Footer />
        </div>
    )
}

export default Aboutuspage