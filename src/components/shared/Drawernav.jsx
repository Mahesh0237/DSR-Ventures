import React from 'react'
import logo from '../../assets/logo.jpg'
import { Stack, Text } from '@mantine/core'
import { NavLink } from 'react-router-dom'

function Drawernav() {
    return (
        <div className='drawernav'>
            <div >
                <img src={logo} width="180px" height="70px" alt="logo" />
            </div>
            <Stack py={20} gap="xs">

                <NavLink to="/" activeclassname="active">
                    <Text style={{ fontSize: "18px" }} p={10} fw={500}>Home</Text>
                </NavLink>
                <NavLink to="/aboutus" activeclassname="active">
                    <Text style={{ fontSize: "18px" }} p={10} fw={500}>About Us</Text>
                </NavLink>
                <NavLink to="/projects" activeclassname="active">
                    <Text style={{ fontSize: "18px" }} p={10} fw={500}>Projects</Text>
                </NavLink>
                <NavLink to="/contactus" activeclassname="active">
                    <Text style={{ fontSize: "18px" }} p={10} fw={500}>Contactus</Text>
                </NavLink>
            </Stack>
        </div>
    )
}

export default Drawernav