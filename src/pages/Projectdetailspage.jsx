import React from 'react'
import Footer from '../components/shared/Footer'
import Projectsdetails from '../components/projects/parts/Projectsdetails'
import Header from '../components/shared/Header'

function Projectdetailspage() {
    return (
        <div className="body-wrapper">
            <Header />
            <Projectsdetails />
            <Footer />
        </div>
    )
}

export default Projectdetailspage