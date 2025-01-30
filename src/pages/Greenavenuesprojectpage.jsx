import React from 'react'
import Projectheader from '../components/newprojectwrapper/Projectheader'
import { Button, Container, Grid, Group, Image, List, Stack, Text } from '@mantine/core'
import Projectcontactform from '../components/newprojectwrapper/Projectcontactform'
import green_avenues_brochure from '../assets/brochure/Green Avenues_Brochure.pdf'
import { IconDownload } from '@tabler/icons-react'
import dsrgallery1 from '../assets/dsr_gallery1.jpeg'
import dsrgallery2 from '../assets/dsr_gallery2.jpeg'
import dsrgallery3 from '../assets/dsr_gallery3.jpeg'
import dsrgallery4 from '../assets/dsr_gallery4.jpeg'
import greenavenues from '../assets/green-avenues.jpg'
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

function Greenavenuesprojectpage() {
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
                                    <img src={greenavenues} width="100%" height="100%" />
                                </Carousel.Slide>
                            </Carousel>
                        </div>
                    </div>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcontactform
                        pdf={green_avenues_brochure}
                        project_name="Prerana Greens Brochure"
                    />
                </Grid.Col>
            </Grid>
            <Container size={1400}>
                <Grid my={50}>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Image src={greenavenues} alt='img' height={400} />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Stack>
                            <Text ta="center" fw={700} style={{ fontSize: "24px" }}>Green Avenues</Text>
                            <Text>
                                Bangalore is fast developing into a world class city with state-of-the art infrastructure
                                to meet the growing needs of discerning citizens. A hub of new generation enterprises a
                                head quarter of Real estate companies, a place with sizable presence of the IT & BT companies.
                                Here, we are introducing the great endeavor, DSR Ventures one of the largest vertically integrated Real
                                Estate Company in Bangalore.
                            </Text>
                            <Text>
                                Class living in peaceful and tranquil neighborhoods, where fresh air, abundant water & blissful silence of countryside. The beautiful park, the serene nature, many more within the property are adding beauty to the Property.
                            </Text>
                            <Text>
                                A short pleasant drive across signal free roads of K R Puram Biggest Hanging Bridge brings you to this green serene location in less than few minutes’ drive from Old Madras Road Junction.
                            </Text>
                            <Text>We have just added a lot more space into your life. Here’s DSR ventures introducing DSR Green Avenues, for people who are looking for quality & luxury life. We do not forget about our planet that has permitted us to live on it. Thus, our layouts are ECO friendly causing least burden on the natural resources. In short, we take responsibility to create benchmarks with high customer satisfaction. Our aim is to add value to our esteemed customer's investment which grows exceptionally.</Text>
                            <Group>
                                <Button color='#0b9444' leftSection={<IconDownload size={18} />} size='md' component='a' href={green_avenues_brochure} download="green_avenues_brochure">Download Brochure</Button>
                            </Group>
                        </Stack>
                    </Grid.Col>
                </Grid>
                <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={20}>Why DSR?</Text>
                    <List spacing={10}>
                        <List.Item>Value for money.</List.Item>
                        <List.Item>Coupled with top-notch quality in construction and design, catering to a comprehensive lifestyle solution with special focus on the overall ambience, DSR Green Avenues proposes to be true value for your money.</List.Item>
                    </List>
                </div>
                <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={20}>Amenities:</Text>
                    <List spacing={10}>
                        <List.Item>Grand Entrance Arch.</List.Item>
                        <List.Item>Asphalted White top roads with Plantation.</List.Item>
                        <List.Item>Well planned Electricity with Street lights.</List.Item>
                        <List.Item>24 hrs. Water Supply with over head tank.</List.Item>
                        <List.Item>40ft Main Road.</List.Item>
                        <List.Item>Underground Sewage.</List.Item>
                        <List.Item>Sanitary</List.Item>
                        <List.Item>24/7 hrs security</List.Item>
                        <List.Item>Compound wall with gated community</List.Item>
                    </List>
                </div>
                <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={20}>Investment & Returns</Text>
                    <Text>Industrial and residential townships and infrastructure is being developed at a good place. DTCP Approved layout, Prerana Green Meadows will boost the return on investment.</Text>
                    <Text>Assured of the best Investment on Your Villa Plot.</Text>
                </div>
                <div className='my-5'>
                <Text fw={700} style={{ fontSize: "25px" }} pb={20}>Advantages</Text>
                <List spacing={10}>
                        <List.Item>As you drift away from city on NH-4 and International Airport, a transformation of a busy city life into a typical systematic environment.</List.Item>
                        <List.Item>DSR Green Avenues situated at one of the hottest location & fast developing automobile hub in North-East Bangalore which is the houses of 468 Japanese companies in Narasapura Industrial Estate.</List.Item>
                        <List.Item>Many landmarks like MVJ Medical College, Sharanya Narayani International School, VOLVO, Confident Amoon Resort, Apex Auto, Bando, Exedy, Honda, Mahindra Aerospace, Scania, Lumax, Aisin, Indo, ASK Automobile and Many more.</List.Item>
                        <List.Item>Hub for Lakhs of Employment.</List.Item>
                    </List>
                </div>
                <div className='my-5'>
                <Text fw={700} style={{ fontSize: "25px" }} pb={20}>Highlights</Text>
                <List spacing={10}>
                       <List.Item>45 Mins. drive from City Railway station & Bustop.</List.Item>
                       <List.Item>30 Mins. drive from International Airport.</List.Item>
                       <List.Item>25 Mins. drive from ITPL.</List.Item>
                       <List.Item>20 Mins. drive from K R Puram Hanging Bridge.</List.Item>
                       <List.Item>10 Mins. drive from Hoskote.</List.Item>
                       <List.Item>3 Mins. drive to Volvo.</List.Item>
                       <List.Item>3 Mins. drive to Narasapura Automobile Hub.</List.Item>
                       <List.Item>3 Mins. from National Highway.</List.Item>
                       <List.Item>Close to upcoming Chennai-Bangalore Industrial Corridor.</List.Item>
                    </List>
                </div>
                <div className='my-4'>
                    <Text fw={700} style={{ fontSize: "30px" }} pb={20}>Gallery</Text>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={greenavenues} alt='img' height={300} />
                        </Grid.Col>
                    </Grid>
                </div>
                <div className='my-4'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={20}>Location</Text>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7771.226581547964!2d77.949194!3d13.123667!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1737567125380!5m2!1sen!2sus" width="600" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Greenavenuesprojectpage