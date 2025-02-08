import React from 'react'
import Projectheader from '../components/newprojectwrapper/Projectheader'
import { Button, Container, Grid, Group, Image, List, Stack, Text } from '@mantine/core'
import Projectcontactform from '../components/newprojectwrapper/Projectcontactform'
import Satvik_Fortune from '../assets/brochure/Satvi_fortune_brochure.pdf'
import { IconDownload } from '@tabler/icons-react'
import Footer from '../components/shared/Footer'
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useViewportSize } from '@mantine/hooks'
import { Carousel } from '@mantine/carousel';
import sathvikelitebanner1 from '../assets/sathvikelitebanner1.jpg'
import sathvikelitebanner2 from '../assets/sathvikelitebanner2.jpg'
import sathvikelitegallery1 from '../assets/sathvikelitegallery1.jpeg'
import sathvikelitegallery2 from '../assets/sathvikelitegallery2.jpeg'
import sathvikelitegallery3 from '../assets/sathvikelitegallery3.jpeg'
import sathvikelitegallery4 from '../assets/sathvikelitegallery4.jpeg'
import sathvikelitegallery5 from '../assets/sathvikelitegallery5.jpeg'
import sathvikelitegallery6 from '../assets/sathvikelitegallery6.jpeg'
import sathvikeliteroutemap from '../assets/sathvikeliteroutemap.jpg'

function Sathvikeliteprojectpage() {
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
                                    <img src={sathvikelitebanner1} width="100%" height="100%" />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={sathvikelitebanner2} width="100%" height="100%" />
                                </Carousel.Slide>
                            </Carousel>
                        </div>
                    </div>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcontactform
                        pdf=""
                        project_name="DSR Satvik Fortune City"
                    />
                </Grid.Col>
            </Grid>
            <Container size={1400}>
                <Grid my={50}>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Image src={sathvikelitebanner2} alt='img' height={300} style={{ objectFit: "fill" }} />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Stack>
                            <Text ta="center" fw={700} style={{ fontSize: "24px" }}>Sathvik Elite Farms</Text>
                            <Text>
                                Sathvik Elite Farms is strategically located near Hoskote in Karnataka.The project is 20 minutes from Bangalore & surrounded by lush greenery & tranquility making it a perfect location for a Vacation Home. Hoskote is connected with the major cities in the region by road.
                                The Indian farmer is a living idol of India, as they are the most hardworking farmers around the world & always busy, working hard for their crops, during day and night.

                                India is called the land of farmers, as most of the people of the country are directly or indirectly involved in the agriculture sector.

                                It would not be wrong to say that 'Indian farmers' are the backbone of the economy and the farmers are indeed the beloved children of Mother India.
                            </Text>
                            <Group>
                                <Button color='#0b9444' leftSection={<IconDownload size={18} />} size='md' component='a' href="#" download="Satvik_Fortune">Download Brochure</Button>
                            </Group>
                        </Stack>
                    </Grid.Col>
                </Grid>
                <div className='my-3'>
                    <Text fw={700} style={{ fontSize: "22px", paddingBottom: "10px" }} >Why DSR Ventures</Text>
                    <Text>
                        In 2012, a group of technocrats in India and overseas together to establish DSR VENTURES in Bangalore, the Silicon Valley of Asia. In a short span of time, this forward-looking company has carved a niche for itself in the demanding and dynamic real estate industry.</Text>

                </div>
                <div className='mb-3'>
                    <Text fw={700} style={{ fontSize: "22px", paddingBottom: "10px" }} >Sathvik Elite Farms</Text>
                    <Text>
                        Every feature in Sathvik Elite Farms is provided to ensure that, it not only increases the aesthetic value of the layout but also contributes to the choice of lifestyle made when you decided to become a part of Sathvik Elite Farms.Good for investment
                    </Text>
                </div>
                <div className=''>
                    <Text fw={700} style={{ fontSize: "22px", paddingBottom: "10px" }} >Amenities</Text>
                    <Text>
                        DSR VENTURES offers a mix of great lifestyle,Perfect For Investment Gated community ,Fully compunded layout with CCTV Survelliance ,borewell ,Avenue plantation kids' play area, and many more, that you keep enjoying all your life.</Text>
                </div>
                <div className='mb-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} py={30}>Project Highlights</Text>
                    <List spacing={10} listStyleType='disc'>
                        <List.Item>5 minutes drive from Chennai Express Highway</List.Item>
                        <List.Item>1km from National Highway (NH 75)</List.Item>
                        <List.Item>7 minutes drive from Hoskote MVJ College</List.Item>
                        <List.Item>20km from KR Puram</List.Item>
                        <List.Item>19km from ITPL</List.Item>
                        <List.Item>2km from Sharanya Narayani International School</List.Item>
                        <List.Item>Near to MVJ Hospital</List.Item>
                        <List.Item>Close to Educational Institutions</List.Item>
                        <List.Item>Near Volvo & Flipkart Company</List.Item>
                        <List.Item>24x7 Vigilance</List.Item>
                        <List.Item>Bore Well water connection</List.Item>
                        <List.Item>Over Head Tank</List.Item>
                        <List.Item>Well planned wide roads</List.Item>
                        <List.Item>Children Play Area</List.Item>
                        <List.Item>Enjoy nature at its best, in your farm</List.Item>
                        <List.Item>Pluck and enjoy fresh fruits from your farm trees</List.Item>
                        <List.Item>A Green Getaway from the hustle bustle of city life</List.Item>
                        <List.Item>Relax, Rejuvenate and Reconnect with nature</List.Item>
                        <List.Item>The Green Investment for a Safer, Greener Future</List.Item>
                    </List>
                </div>
                <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={20}>World-Class Amenities:</Text>
                    <List spacing={10}>
                        <List.Item>Fully Equipped Clubhouse</List.Item>
                        <List.Item>Swimming Pool & Children’s Play Area</List.Item>
                        <List.Item>Jogging Track & Landscaped Gardens</List.Item>
                        <List.Item>Community Hall & Indoor Games</List.Item>
                        <List.Item>Sports Facilities: Badminton court, basketball court, and more</List.Item>
                        <List.Item>Underground Water Supply & Drainage System</List.Item>
                        <List.Item>Electricity & Solar Power Backup</List.Item>
                    </List>
                </div>
                <div className='my-4'>
                    <Text fw={700} style={{ fontSize: "30px" }} pb={20}>Gallery</Text>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={sathvikelitegallery1} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={sathvikelitegallery2} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={sathvikelitegallery3} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={sathvikelitegallery4} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={sathvikelitegallery5} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={sathvikelitegallery6} alt='img' height={300} />
                        </Grid.Col>
                    </Grid>
                </div>
                <div className='my-3'>
                    <Image src={sathvikeliteroutemap} alt='img' />
                </div>
                <div className='my-4'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={20}>Location</Text>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3885.68241792924!2d77.89624407507897!3d13.119294187209803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA3JzA5LjUiTiA3N8KwNTMnNTUuOCJF!5e0!3m2!1sen!2sin!4v1738770718971!5m2!1sen!2sin" width="600" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                            <Text>Sathvik Elite Farms is conveniently located close to Narsapura and Hardware parks,The Hoskote stretch has a number of industries involved in manufacturing, pharmaceutical, automobile and IT.</Text>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Stack>
                                <Text fw={600} size='lg'>For Enquiries contact:</Text>
                                <Text>24/,3rdCross, Subashnagar, Battarahalli, Virgonagar post, K.R Puram, Bangalore-49, India.</Text>
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

export default Sathvikeliteprojectpage