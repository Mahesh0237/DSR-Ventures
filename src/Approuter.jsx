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
import Greenavenuesprojectpage from './pages/Greenavenuesprojectpage'
import Satvikamogaplotspage from './pages/Satvikamogaplotspage'
import Sathvikavenueprojectpage from './pages/Sathvikavenueprojectpage'
import Sathvikeliteprojectpage from './pages/Sathvikeliteprojectpage'
import Lotusfarmprojectpage from './pages/Lotusfarmprojectpage'
import Sathvikfusioncitypage from './pages/Sathvikfusioncitypage'
import Sathvikdreamcitypage from './pages/Sathvikdreamcitypage'
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
                <Route path='/greenavenuesdetails' element={<Greenavenuesprojectpage />} />
                <Route path='/satvikamogaplots' element={<Satvikamogaplotspage />} />
                <Route path='/sathvikavenue' element={<Sathvikavenueprojectpage />} />
                <Route path='/sathvikelite' element={<Sathvikeliteprojectpage />} />
                <Route path='/sathviklotusfarm' element={<Lotusfarmprojectpage />} />
                <Route path='/sathvikfusioncity' element={<Sathvikfusioncitypage />} />
                <Route path='/sathvikdreamcity' element={<Sathvikdreamcitypage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Approuter