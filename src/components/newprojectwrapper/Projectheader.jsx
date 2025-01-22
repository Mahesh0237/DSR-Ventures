import React from 'react'
import logo from '../../assets/logo.jpg'
import { Button, Group } from '@mantine/core';
import { IconBrandWhatsapp, IconPhoneCall } from '@tabler/icons-react';

function Projectheader() {
    return (
        <header className="minimized" >
            <div className="section-wrapper">
                <div className="header-wrapper">
                    <div className="site-logo">
                        <a href="/" >
                            <img src={logo} width="120px" height="50px" />
                        </a>
                    </div>
                    <Group grow justify='flex-end' ml={20}>
                        <Button leftSection={<IconPhoneCall size={18} />} component='a' href='tel:9071288899' size='xs'>Call</Button>
                        <Button leftSection={<IconBrandWhatsapp size={18} />} color='dark' size='xs' component='a' href='https://wa.me/9071288899' target="_blank">WhatsUp</Button>
                    </Group>
                </div>
            </div>
        </header>
    )
}

export default Projectheader