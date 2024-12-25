import React, { useRef } from 'react'
import { Carousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay';
import { useViewportSize } from '@mantine/hooks'
import { Button, Card, Container, Grid, Group, Image, Stack, Text } from '@mantine/core'
import projectslide1 from '../../../assets/projectslide1.jpg'
import projectslide2 from '../../../assets/projectslide2.jpg'
import projectslide3 from '../../../assets/projectslide3.jpg'
import Enquireyform from '../../homewrapper/shared/Enquireyform';
function Projectsdetails() {
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
        updateheight = height - 250
        updateleftpos = "28%"
    }
    return (
        <main className="listings-page margin-top-page">
            <Container size={1600} >
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
                            <img src={projectslide1} width="100%" alt='img' />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <img src={projectslide2} width="100%" alt='img' />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <img src={projectslide3} width="100%" alt='img' />
                        </Carousel.Slide>
                    </Carousel>
                </div>
                <Stack my={50}>
                    <Text fw={700} style={{ fontSize: "20px" }}>Properties Detail</Text>
                    <Text>We have just added a lot more space into your life.heres PRERANA INNOVATIVE DEVELOPERS intoducing PRERANA GREENS,for people who are looking for quality & luxury life.</Text>
                    <Text>We do nor forget about our planet that has permited us to live on it.Thus.our layout are ECO friendly causing least burden on the Natural resourses.In short, we take responsibility to create benchmarks with high customer satisfaction.Our aim is to add value to our esteemed customers invesments which grows exceptionally.</Text>
                    <Text fw={700} style={{ fontSize: "20px" }}>Why Prerana Greens</Text>
                    <Text>Hoskote being developed as Satellite Township and Infrastructure Corridor spreading 6,000 acres</Text>
                    <Text>Project approved by HPA and all leading banks</Text>
                    <Text>Few minutes drive from Whitefield & KR Puram, closer to Airport</Text>
                    <Text>Home to VOLVO, Bando & Honda, Mahindra & Mahindra Aero space 1,500 acres Auto Hub coming up in Narsapura near Neo-Bangalore</Text>
                    <Text>468 Japanese companies have units on the Bangalore-Chennai belt</Text>
                    <Text>284 Km STRR connecting Hoskote; 6 lane Bangalore-Chennai expressway</Text>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Stack>
                                <Text fw={700} style={{ fontSize: "20px" }}>AMENTIES</Text>
                                <Text>Grand entrance Arch</Text>
                                <Text>24hrs water supply with over head tark</Text>
                                <Text>50ft wide road</Text>
                                <Text>Underground sewage</Text>
                                <Text>Sanitary</Text>
                                <Text>Swimming pool with club house</Text>
                                <Text>Tennis court</Text>
                                <Text>24/7 hrs security</Text>
                                <Text>Compound wall with gated community</Text>
                            </Stack>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Text mb={20} fw={700} style={{ fontSize: "20px" }}>Location</Text>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62174.37653727183!2d77.985023!3d13.105614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13c3da4351e9%3A0x9f06037713d0352c!2sMahindra%20Aerospace%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1721049375250!5m2!1sen!2sus" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Grid.Col>
                    </Grid></Stack>
                <Enquireyform />
            </Container>
        </main>
    )
}

export default Projectsdetails