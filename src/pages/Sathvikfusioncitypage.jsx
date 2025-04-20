import React from 'react'
import Projectheader from '../components/newprojectwrapper/Projectheader'
import { Button, Container, Grid, Group, Image, List, Stack, Text } from '@mantine/core'
import Projectcontactform from '../components/newprojectwrapper/Projectcontactform'
import Satvik_Fusion_city from '../assets/brochure/DSR_Sathvik_Fusion_City.pdf'
import { IconDownload } from '@tabler/icons-react'
import dsrgallery1 from '../assets/sathvikfusioncitygallery1.png'
import dsrgallery2 from '../assets/sathvikfusioncitygallery2.png'
import dsrgallery3 from '../assets/sathvikfusioncitygallery3.png'
import dsrgallery4 from '../assets/sathvikfusioncitygallery3.png'
import Dsr_fortune_city from '../assets/dsr_satvik_fortune_city.jpeg'
import Footer from '../components/shared/Footer'
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useViewportSize } from '@mantine/hooks'
import { Carousel } from '@mantine/carousel';
import dsr_rotuemap from '../assets/sathvikfusioncitymap.png'
import dsr_location from '../assets/dsr_location.png'
import Sathvikfusioncity from '../assets/Sathvikfusioncity.png'

function Sathvikfusioncitypage() {
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
                                withControls={false}
                                withIndicators
                                height="100%"
                                dragFree
                                loop
                                style={{ flex: 1 }}
                                plugins={[autoplay.current]}
                                onMouseEnter={autoplay.current.stop}
                                onMouseLeave={autoplay.current.reset}
                            >
                                <Carousel.Slide>
                                    <img src={Sathvikfusioncity} width="100%" height="100%" />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={Sathvikfusioncity} width="100%" height="100%" />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={Sathvikfusioncity} width="100%" height="100%" />
                                </Carousel.Slide>
                            </Carousel>
                        </div>
                    </div>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcontactform
                        pdf={Satvik_Fusion_city}
                        project_name="DSR Satvik Fusion City"
                    />
                </Grid.Col>
            </Grid>
            <Container size={1400}>
                <Grid my={50}>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Image src={Sathvikfusioncity} alt='img' height={300} />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Stack>
                            <Text ta="center" fw={700} style={{ fontSize: "24px" }}>Sathvik Fusion City</Text>
                            <Text>
                                DSR Sathvik Fusion City is a prestigious, BMRDA - approved residential
                                layout located in the thriving suburb of Hoskote, Bangalore. Spread over
                                a vast expanse, this well-planned township offers a perfect blend of
                                urban connectivity and serene living, designed to meet the aspirations of
                                modern home buyers. With an array of plot sizes to choose from, DSR
                                Sathvik Fusion City caters to both investors and families looking to build
                                their dream homes.
                            </Text>
                            <Group>
                                <Button color='#0b9444' leftSection={<IconDownload size={18} />} size='md' component='a' href={Satvik_Fusion_city} download="Satvik_Fusion_city">Download Brochure</Button>
                            </Group>
                        </Stack>
                    </Grid.Col>
                </Grid>
                <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} py={30}>Project Highlights</Text>
                    <List spacing={10}>
                        <List.Item><Text fw={700} component='span'>BMRDA-Approved Layout with E-Khata:</Text> Assured regulatory compliance, ensuring a secure investment.</List.Item>
                        <List.Item><Text fw={700} component='span'>Prime Location:</Text> Strategically located right on the National Highway for 1.5 km, offering seamless connectivity.</List.Item>
                        <List.Item><Text fw={700} component='span'>Proximity to VIT University:</Text> Just adjacent to the upcoming 100-acre VIT University campus, promising future growth and value appreciation.</List.Item>
                        <List.Item><Text fw={700} component='span'>Eco-Friendly Development:</Text> Emphasis on sustainable and green living spaces. </List.Item>
                        <List.Item> <Text fw={700} component='span'>Modern Infrastructure:</Text>
                            Wide roads, landscaped gardens, and top-tier civic amenities.</List.Item>
                        <List.Item><Text fw={700} component='span'>Garden City University:</Text>  Garden City University is situated in 150 acres, is very near around 1.8 km.</List.Item>
                    </List>
                </div>
                <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={30}>Why Invest in DSR Fusion City?</Text>
                    <List spacing={10}>
                        <List.Item><Text fw={700} component='span'>Future Appreciation:</Text> : The development of the VIT University campus and Garden City University are poised to create immense demand for residential and rental properties in the vicinity.</List.Item>
                        <List.Item><Text fw={700} component='span'>Excellent Connectivity:</Text> The project is ideally located on connecting Hoskote with key areas of Bangalore such as Whitefield, ITPL and Old Madras Road.</List.Item>
                        <List.Item><Text fw={700} component='span'>High Growth Corridor:</Text> Hoskote is one of Bangalore's most rapidly developing zones, with infra structural advancements and numerous upcoming commercial projects</List.Item>
                        <List.Item><Text fw={700} component='span'>Serene Living Environment:</Text> Enjoy the tranquillity of suburban living with lush green surroundings and world-class amenities, all within a stone's throw from urban conveniences. </List.Item>
                    </List>
                </div>
                <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={20}>World-Class Amenities:</Text>
                    <List spacing={10}>
                        <List.Item>Entrance Grand Arch</List.Item>
                        <List.Item>Surrounded by compound wall</List.Item>
                        <List.Item>Children's Play Area</List.Item>
                        <List.Item>Jogging Track</List.Item>
                        <List.Item>Parks</List.Item>
                        <List.Item>Landscaped Gardens</List.Item>
                        <List.Item>Underground Drainage System</List.Item>
                        <List.Item>RCC Drainage</List.Item>
                        <List.Item>CC Roads</List.Item>
                        <List.Item>Underground Electricity</List.Item>
                        <List.Item>Wi-Fi cable provided</List.Item>
                        <List.Item>Overhead Tank</List.Item>
                    </List>
                </div>
                <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={20}>PROXIMITY:</Text>
                    <List spacing={10}>
                        <List.Item>25 Mins. drive from International Airport</List.Item>
                        <List.Item>30 Mins. drive from Whitefield Metro Station</List.Item>
                        <List.Item>30 Mins. drive from ITPL</List.Item>
                        <List.Item>25 Mins. drive from K R Puram Hanging Bridge</List.Item>
                        <List.Item>10 Mins. drive from MVJ Hospital, Hoskote</List.Item>
                        <List.Item>13 Mins. drive from Hoskote Toll</List.Item>
                        <List.Item>15 Mins. drive from Narasapura Automobile Hub</List.Item>
                        <List.Item>5 mins. drive from Pillagumpe Indl. area, Hoskote</List.Item>
                        <List.Item>1.5 km from VIT university campus </List.Item>
                        <List.Item>1.5 km from National Highway</List.Item>
                        <List.Item>1.5 km from Chintamani Road & Kadapa Highway</List.Item>
                        <List.Item>6 km from Chennai-Bangalore Industrial Corridor</List.Item>
                        <List.Item>Surrounded by Amezon wearhouse, Flipkart, etc</List.Item>
                    </List>
                </div>
                <div className='my-4'>
                    <Text fw={700} style={{ fontSize: "30px" }} pb={20}>Gallery</Text>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={dsrgallery2} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={dsrgallery3} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={dsrgallery4} alt='img' height={300} />
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
                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3885.68241792924!2d77.89624407507897!3d13.119294187209803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA3JzA5LjUiTiA3N8KwNTMnNTUuOCJF!5e0!3m2!1sen!2sin!4v1738770718971!5m2!1sen!2sin" width="600" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Sathvikfusioncitypage