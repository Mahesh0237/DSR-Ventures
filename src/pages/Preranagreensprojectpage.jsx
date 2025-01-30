import React from 'react'
import Projectheader from '../components/newprojectwrapper/Projectheader'
import { Button, Container, Grid, Group, Image, List, Stack, Text } from '@mantine/core'
import Projectcontactform from '../components/newprojectwrapper/Projectcontactform'
import prerana_greens_brochure from '../assets/brochure/prerana_greens_brochure.pdf'
import { IconDownload } from '@tabler/icons-react'
import dsrgallery1 from '../assets/dsr_gallery1.jpeg'
import dsrgallery2 from '../assets/dsr_gallery2.jpeg'
import dsrgallery3 from '../assets/dsr_gallery3.jpeg'
import dsrgallery4 from '../assets/dsr_gallery4.jpeg'
import projectslide1 from '../assets/projectslide1.jpg'
import projectslide2 from '../assets/projectslide2.jpg'
import projectslide3 from '../assets/projectslide3.jpg'
import Dsr_fortune_city from '../assets/dsr_satvik_fortune_city.jpeg'
import Footer from '../components/shared/Footer'
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useViewportSize } from '@mantine/hooks'
import { Carousel } from '@mantine/carousel';
import dsr_rotuemap from '../assets/dsr_routemap.png'
import dsr_location from '../assets/dsr_location.png'

function Preranagreensprojectpage() {
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
                                    <img src={projectslide1} width="100%" height="100%" />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={projectslide2} width="100%" height="100%" />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={projectslide3} width="100%" height="100%" />
                                </Carousel.Slide>
                            </Carousel>
                        </div>
                    </div>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcontactform
                        pdf={prerana_greens_brochure}
                        project_name="Prerana Greens Brochure"
                    />
                </Grid.Col>
            </Grid>
            <Container size={1400}>
                <Grid my={50}>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Image src={projectslide2} alt='img' height={300} />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Stack>
                            <Text ta="center" fw={700} style={{ fontSize: "24px" }}>Prerana Greens</Text>
                            <Text>
                                We have just added a lot more space into your life.heres PRERANA INNOVATIVE DEVELOPERS intoducing PRERANA GREENS,for people who are looking for quality & luxury life.

                                We do nor forget about our planet that has permited us to live on it.Thus.our layout are ECO friendly causing least burden on the Natural resourses.In short, we take responsibility to create benchmarks with high customer satisfaction.Our aim is to add value to our esteemed customers invesments which grows exceptionally.
                            </Text>
                            <Group>
                                <Button color='#0b9444' leftSection={<IconDownload size={18} />} size='md' component='a' href={prerana_greens_brochure} download="prerana_greens_brochure">Download Brochure</Button>
                            </Group>
                        </Stack>
                    </Grid.Col>
                </Grid>
                <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={20}>Why Prerana Greens</Text>
                    <List spacing={10}>
                        <List.Item>Hoskote being developed as Satellite Township and Infrastructure Corridor spreading 6,000 acres</List.Item>
                        <List.Item>Project approved by HPA and all leading banks</List.Item>
                        <List.Item>Few minutes drive from Whitefield & KR Puram, closer to Airport</List.Item>
                        <List.Item>Home to VOLVO, Bando & Honda, Mahindra & Mahindra Aero space 1,500 acres Auto Hub coming up in Narsapura near Neo-Bangalore</List.Item>
                        <List.Item>468 Japanese companies have units on the Bangalore-Chennai belt</List.Item>
                        <List.Item>284 Km STRR connecting Hoskote; 6 lane Bangalore-Chennai expressway</List.Item>
                    </List>
                </div>
                <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={20}>World-Class Amenities:</Text>
                    <List spacing={10}>
                        <List.Item>Grand entrance Arch</List.Item>
                        <List.Item>24hrs water supply with over head tark</List.Item>
                        <List.Item>J50ft wide road</List.Item>
                        <List.Item>CUnderground sewage</List.Item>
                        <List.Item>Sanitary</List.Item>
                        <List.Item>Swimming pool with club house</List.Item>
                        <List.Item>Tennis court</List.Item>
                        <List.Item>24/7 hrs security</List.Item>
                        <List.Item>Compound wall with gated community</List.Item>
                    </List>
                </div>
                <div className='my-4'>
                    <Text fw={700} style={{ fontSize: "30px" }} pb={20}>Gallery</Text>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={projectslide1} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={projectslide2} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={projectslide3} alt='img' height={300} />
                        </Grid.Col>
                    </Grid>
                </div>
                <div className='my-4'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={20}>Location</Text>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62174.37653727183!2d77.985023!3d13.105614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13c3da4351e9%3A0x9f06037713d0352c!2sMahindra%20Aerospace%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1721049375250!5m2!1sen!2sus" width="600" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Stack>
                                <Text fw={600} size='lg'>For Enquiries contact:</Text>
                                <Text>Bangalore Urban, <br /> Karnataka- 560099.</Text>
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

export default Preranagreensprojectpage