import React from 'react'
import Projectheader from '../components/newprojectwrapper/Projectheader'
import { Button, Container, Grid, Group, Image, List, Stack, Text } from '@mantine/core'
import Projectcontactform from '../components/newprojectwrapper/Projectcontactform'
import DSRSathvikDreamCitybrochure from '../assets/brochure/DSR_Sathvik_Dream City.pdf'
import { IconDownload } from '@tabler/icons-react'
import dreamcity1 from '../assets/sathvikdreamcity1.jpeg'
import dreamcity2 from '../assets/sathvikdreancity2.jpeg'
import sathvikdreamcity from '../assets/sathvikdreamcity.png'
import sathvikdreamcity3 from '../assets/sathvikdreamcity3.png'
import Footer from '../components/shared/Footer'
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useViewportSize } from '@mantine/hooks'
import { Carousel } from '@mantine/carousel';
import dsr_rotuemap from '../assets/dreamcity_route_map.png'

function Sathvikdreamcitypage() {
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
                                // withControls={false}
                                withIndicators
                                height="100%"
                                loop
                                style={{ flex: 1 }}
                                plugins={[autoplay.current]}
                                onMouseEnter={autoplay.current.stop}
                                onMouseLeave={autoplay.current.reset}
                            >
                                <Carousel.Slide>
                                    <img src={dreamcity1} width="100%" height="100%" />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={dreamcity2} width="100%" height="100%" />
                                </Carousel.Slide>
                            </Carousel>
                        </div>
                    </div>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcontactform
                        pdf={DSRSathvikDreamCitybrochure}
                        project_name="DSR Satvik Dream City"
                    />
                </Grid.Col>
            </Grid>
            <Container size={1400}>
                <Grid my={50}>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Image src={sathvikdreamcity} alt='img' height={300}
                            style={{ objectFit: "fill" }}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Stack>
                            <Text ta="center" fw={700} style={{ fontSize: "24px" }}>Sathvik Dream City</Text>
                            <Text>
                                DSR Sathvik Dream City is a prestigious, BMRDA-
                                approved residential layout located in the thriving suburb of Hoskote, Bangalore. Spread over a vast expanse, this well-planned township offers a perfect blend of urban connectivity and serene living, designed to meet the aspirations of modern homebuyers. With an array of plot sizes to choose from, DSR Dream City caters to both investors and families looking to build their dream homes.
                            </Text>
                            <Group>
                                <Button color='#0b9444' leftSection={<IconDownload size={18} />} size='md' component='a' href={DSRSathvikDreamCitybrochure} download="Satvik_dream_city">Download Brochure</Button>
                            </Group>
                        </Stack>
                    </Grid.Col>
                </Grid>
                <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} py={30}>Project Highlights</Text>
                    <List spacing={10}>
                        <List.Item><Text fw={700} component='span'>BMRDA-Approved Layout:</Text> Assured regulatory compliance, ensuring a secure in vestment.</List.Item>
                        <List.Item><Text fw={700} component='span'>Prime Location:</Text> Strategically located right on the National Highway, offering seamless connectivity.</List.Item>
                        <List.Item><Text fw={700} component='span'>Proximity to VIT University:</Text> Just adjacent to the upcoming 100-acre VIT University campus, promising future growth and value appreciation.</List.Item>
                        <List.Item><Text fw={700} component='span'>Eco-Friendly Development:</Text> Emphasis on sustainable and green living spaces.
                            Modern Infrastructure: Wide roads, landscaped gardens, and top-tier civic amenities.
                            .</List.Item>
                        <List.Item> <Text fw={700} component='span'>Garden City University:</Text>
                            Garden City University is situated in 150 acres, is very near around 500 mts .</List.Item>
                        <List.Item><Text fw={700} component='span'>Up coming Wonderla Park:</Text>3 kms from our Layout.</List.Item>
                    </List>
                </div>
                <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={30}>Why Invest in DSR Sathvik Dream City?</Text>
                    <Text>
                        Future Appreciation: The development of the VIT University campus is poised to create immense demand for residential and rental properties in the vicinity.
                        Excellent Connectivity: The project is ideally located on NH-75, connecting Hoskote with key areas of Bangalore such as Whitefield, ITPL, and Old Madras Road.
                        High Growth Corridor: Hoskote is one of Bangalore’s most rapidly developing zones, with infrastructural advancements and numerous upcoming commercial projects.
                        Serene Living Environment: Enjoy the tranquility of suburban living with lush green surroundings and world-class amenities, all within a stone’s throw from urban conveniences.</Text>
                </div>
                <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={20}>World-Class Amenities:</Text>
                    <List spacing={10}>
                        <List.Item>Entrance Grand Arch.</List.Item>
                        <List.Item>Surrounded by compound wall.</List.Item>
                        <List.Item>Children's Play Area.</List.Item>
                        <List.Item>Jogging Track.</List.Item>
                        <List.Item>Landscaped Gardens.</List.Item>
                        <List.Item>Badminton Court.</List.Item>
                        <List.Item>Underground Water Supply for each plot.</List.Item>
                        <List.Item>Underground Drainage System.</List.Item>
                        <List.Item>RCC Drainage.</List.Item>
                        <List.Item>CC Roads.</List.Item>
                        <List.Item>Underground Electricity.</List.Item>
                        <List.Item>Wi-Fi cable provided.</List.Item>
                        <List.Item>Overhead Tank.</List.Item>
                    </List>
                </div>
                <div className='my-4'>
                    <Text fw={700} style={{ fontSize: "30px" }} pb={20}>Gallery</Text>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={dreamcity1} alt='img' height={300} style={{objectFit:"fill"}}/>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={dreamcity2} alt='img' height={300} style={{objectFit:"fill"}}/>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={sathvikdreamcity3} alt='img' height={300} style={{objectFit:"fill"}}/>
                        </Grid.Col>
                    </Grid>
                </div>
                <div className='my-3'>
                    <Image src={dsr_rotuemap} alt='img' />
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

export default Sathvikdreamcitypage