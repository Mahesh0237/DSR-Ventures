import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Aboutuspage from './pages/Aboutuspage'
import Contactuspage from './pages/Contactuspage'
import Projectpage from './pages/Projectpage'
import Projectdetailspage from './pages/Projectdetailspage'
import Satvikprojectsetails from './pages/Satvikprojectsetails'
import Satvikfurtuneprojectpage from './pages/Satvikfurtuneprojectpage'
import Preranagreensprojectpage from './pages/Preranagreensprojectpage'
function Approuter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/aboutus' element={<Aboutuspage />} />
                <Route path='/projects' element={<Projectpage />} />
                <Route path='/contactus' element={<Contactuspage />} />
                <Route path='/projectdetails' element={<Projectdetailspage />} />
                <Route path='/satvikprojectdetails' element={<Satvikfurtuneprojectpage />} />
                <Route path='/preranagreensdetails' element={<Preranagreensprojectpage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Approuter