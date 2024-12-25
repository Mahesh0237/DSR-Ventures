import React from 'react'
import Footer from '../components/shared/Footer'
import Projectswrapper from '../components/projects/Projectswrapper'
import Header from '../components/shared/Header'
function Projectpage() {
    return (
        <div className="body-wrapper">
            <Header />
            <Projectswrapper/>
            <Footer />
        </div>
    )
}

export default Projectpage