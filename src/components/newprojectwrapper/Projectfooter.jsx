import React from 'react'
import logo from '../../assets/venets_logo.jpg'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import googleplus from '../../assets/googleplus.png'
import { Divider, Group, Text } from '@mantine/core'
function Projectfooter() {
    return (
        <footer className="site-footer" style={{ background: "#2d72a9" }}>
            <div className="section-wrapper">
                <div className='mx-5'>
                    <Group justify='space-between'>
                        <Text size='sm' c="white">Copyrights © 2024 Pruthvi Projects All Rights Reserved</Text>
                        <div>
                            <a href="#" target="_blank" >
                                <img src={twitter} alt='img' width="18px" height="18px" />
                            </a>
                            <a href="#" target="_blank" className='px-3'>
                                <img src={googleplus} alt='img' width="18px" height="18px" />
                            </a>
                            <a href="#" target="_blank">
                                <img src={facebook} alt='img' width="18px" height="18px" />
                            </a>
                            <a href="#" target="_blank" className='px-3'>
                                <img src={linkedin} alt='img' width="18px" height="18px" />
                            </a>
                        </div>
                        <Text size='sm' c="white">Designed by <a href="http://incigol.in/" target="_blank">INCIGOL</a></Text>
                    </Group>

                </div>
            </div>
        </footer>
    )
}

export default Projectfooter