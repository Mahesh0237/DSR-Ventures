import React from 'react'
import Projectheader from '../components/newprojectwrapper/Projectheader'
import { Button, Container, Grid, Group, Image, List, Stack, Text } from '@mantine/core'
import Projectcontactform from '../components/newprojectwrapper/Projectcontactform'
import Lotusform_Brochure from '../assets/brochure/Lotusform_Brochure.pdf'
import { IconDownload } from '@tabler/icons-react'
import Footer from '../components/shared/Footer'
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useViewportSize } from '@mantine/hooks'
import { Carousel } from '@mantine/carousel';
import sathvikelitebanner1 from '../assets/sathvikelitebanner1.jpg'
import sathvikelitebanner2 from '../assets/sathvikelitebanner2.jpg'
import Sathviklotusfarm1 from '../assets/Sathviklotusfarm1.jpeg'
import Sathviklotusfarm2 from '../assets/Sathviklotusfarm2.jpeg'
import Sathviklotusfarm3 from '../assets/Sathviklotusfarm3.jpeg'
import Sathviklotusfarm4 from '../assets/Sathviklotusfarm4.jpeg'
import Sathviklotusfarm5 from '../assets/Sathviklotusfarm5.jpeg'
import Sathviklotusfarm6 from '../assets/Sathviklotusfarm6.jpeg'
import Sathviklotusfarm7 from '../assets/Sathviklotusfarm7.jpeg'
import Sathviklotusfarm8 from '../assets/Sathviklotusfarm8.jpeg'
import Sathviklotusfarm9 from '../assets/Sathviklotusfarm9.jpeg'
import sathvikroutemap from '../assets/sathvikroutemap.png'

function Lotusfarmprojectpage() {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
    const { height, width } = useViewportSize();
    let updateheight;
    let updateleftpos;
    if (width < 500) {
        updateheight = '200px'
        updateleftpos = "40%"
    } else if (width < 1200) {
        updateheight = '400px'
        updateleftpos = "40%"
    } else {
        updateheight = height - 170
        updateleftpos = "28%"
    }
    return (
        <div className="body-wrapper">
            <Projectheader />
            <Grid mt={110}>
                <Grid.Col span={{ base: 12, md: 8, lg: 8 }}>
                    <div style={{ position: "relative" }}>
                        {/* <Projectbanner /> */}

                        <div style={{ height: updateheight, display: 'flex' }}>
                            <Carousel
                                withIndicators
                                height="100%"
                                loop
                                style={{ flex: 1 }}
                                plugins={[autoplay.current]}
                                onMouseEnter={autoplay.current.stop}
                                onMouseLeave={autoplay.current.reset}
                            >
                                <Carousel.Slide>
                                    <img src={Sathviklotusfarm8} width="100%" height="100%" />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={Sathviklotusfarm2} width="100%" height="100%" />
                                </Carousel.Slide>
                            </Carousel>
                        </div>
                    </div>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcontactform
                        pdf={Lotusform_Brochure}
                        project_name="Lotusform_Brochure"
                    />
                </Grid.Col>
            </Grid>
            <Container size={1400}>
                <Grid my={50}>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Image src={Sathviklotusfarm4} alt='img' height={300} style={{ objectFit: "fill" }} />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Stack>
                            <Text ta="center" fw={700} style={{ fontSize: "24px" }}>Sathvik Lotus Farm</Text>
                            <Text>
                                ISATHVIK
                                L
                                OTUS
                                FARMS - a fascinating farm land
                                near Bengaluru (Hosakote) which gives a pleasure
                                of living on the lap of “MOTHER EARTH”. Our
                                emphasis is to pr
                                ovide luxury of modern living with
                                an ancient style along with ecological balance
                                taking you closer to the nature which enriches your
                                health and hearty life. The harvest fields, valleys
                                and water ponds that surround our farm
                                keep you
                                stay connected to the Mother Nature! Our goal is
                                to pr
                                ovide high quality farm-land surrounded
                                by
                                lush green landscape and scenic mountains at
                                affordable prices.
                            </Text>
                            <Text>Another fabulous offer from the DSR VENTURES
                                Bangalore, SATHVIK
                                L
                                OTUS
                                FARMS is a 5, 6 & 7
                                gunta farm where you can have your
                                own units
                                which can be occupied as and when you feel like
                                spending some quality time in the lap of beautiful
                                nature and at other times let out for those nature
                                lovers who frequent the mysterious jungles.
                                You
                                can make it your permanent
                                residence too when
                                you hang your boots.
                            </Text>
                            <Group>
                                <Button color='#0b9444' leftSection={<IconDownload size={18} />} size='md' component='a' href={Lotusform_Brochure} download="Lotusform_Brochure">Download Brochure</Button>
                            </Group>
                        </Stack>
                    </Grid.Col>
                </Grid>
                {/* <div className='my-3'>
                    <Text fw={700} style={{ fontSize: "22px", paddingBottom: "10px" }} >Why DSR Ventures</Text>
                    <Text>
                        In 2012, a group of technocrats in India and overseas together to establish DSR VENTURES in Bangalore, the Silicon Valley of Asia. In a short span of time, this forward-looking company has carved a niche for itself in the demanding and dynamic real estate industry.</Text>

                </div> */}
                <div className='mb-3'>
                    <Text fw={700} style={{ fontSize: "22px", paddingBottom: "10px" }} >Sathvik Lotus Farms</Text>
                    <Text>
                        Individual farms are demarcated in sizes
                        ranging from 5445-7702 sq.ft. A typical farm
                        will have Commercial trees such as Teak,
                        Silver Oak, Melia Dubia, Neem, Mahogany,
                        Jack Fruit and fruit trees such as Mango,
                        Guava, Orange, Mosumbi, Pomegranate,
                        Sapota, Custard Apple, Wood Apple, Avacado,
                        Jamun, Amla, Lemon etc.

                    </Text>
                </div>
                <div className=''>
                    <Text fw={700} style={{ fontSize: "22px", paddingBottom: "10px" }} >Amenities</Text>
                    <List listStyleType='disc'>
                        <List.Item>Entrance Gate</List.Item>
                        <List.Item>Single Room in each farm</List.Item>
                        <List.Item>24x7 Vigilance</List.Item>
                        <List.Item>Mesh Fencing to individual farm</List.Item>
                        <List.Item>Bore Well water connection</List.Item>
                        <List.Item>Over Head Tank to individual farm</List.Item>
                        <List.Item> Well planned wide roads</List.Item>
                        <List.Item>Children Play Area</List.Item>
                    </List>
                </div>
                <div className='mb-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} py={30}>Project Highlights</Text>
                    <List spacing={10} listStyleType='disc'>
                        <List.Item>1.5km from Chennai Express Highway</List.Item>
                        <List.Item>3km from National Highway</List.Item>
                        <List.Item>4km from Hoskote MVJ College</List.Item>
                        <List.Item>16km from KR Puram
                        </List.Item>
                        <List.Item>17km from ITPL</List.Item>
                        <List.Item>24km from Baiyappanahalli Metro Station</List.Item>
                        <List.Item>Near to MVJ Hospital</List.Item>
                        <List.Item>Enjoy nature at its best, in your farm</List.Item>
                        <List.Item>Pluck and enjoy fresh fruits from your farm trees</List.Item>
                        <List.Item>A Green Getaway from the hustle bustle of city life</List.Item>
                        <List.Item>Relax, Rejuvenate and Reconnect with nature</List.Item>
                        <List.Item>The Green Investment for a Safer, Greener Future</List.Item>
                    </List>
                </div>
                <div className='my-4'>
                    <Text fw={700} style={{ fontSize: "30px" }} pb={20}>Gallery</Text>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={Sathviklotusfarm1} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={Sathviklotusfarm2} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={Sathviklotusfarm3} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={Sathviklotusfarm7} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={Sathviklotusfarm8} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={Sathviklotusfarm9} alt='img' height={300} />
                        </Grid.Col>
                    </Grid>
                </div>
                <div className='my-3'>
                    <Image src={sathvikroutemap} alt='img' style={{ objectFit: "fill" }} />
                </div>
                <div className='my-4'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={20}>Location</Text>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15564.848004848904!2d77.65383480000001!3d12.76473995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ecacda35401%3A0x4dfe4672a7c89184!2sHaragadde%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1727801959750!5m2!1sen!2sin" width="600" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Stack>
                                <Text fw={600} size='lg'>For Enquiries contact:</Text>
                                <Text>24/,3rdCross,Subashnagar,Battarahalli, Virgonagar post, K.R Puram, Bangalore-49, India.</Text>
                                <div>
                                    <Text fw={600}>Email</Text>
                                    <Text>dsrprojects7@gmail.com</Text>
                                </div>
                                <div>
                                    <Text fw={600}>Phone</Text>
                                    <Text>8088977779</Text>
                                </div>
                            </Stack>
                        </Grid.Col>
                    </Grid>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Lotusfarmprojectpage