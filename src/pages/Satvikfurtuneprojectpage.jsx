import React from 'react'
import Projectheader from '../components/newprojectwrapper/Projectheader'
import { Button, Container, Grid, Group, Image, List, Stack, Text } from '@mantine/core'
import Projectcontactform from '../components/newprojectwrapper/Projectcontactform'
import Satvik_Fortune from '../assets/brochure/Satvi_fortune_brochure.pdf'
import { IconDownload } from '@tabler/icons-react'
import dsrgallery1 from '../assets/dsr_gallery1.jpeg'
import dsrgallery2 from '../assets/dsr_gallery2.jpeg'
import dsrgallery3 from '../assets/dsr_gallery3.jpeg'
import dsrgallery4 from '../assets/dsr_gallery4.jpeg'
import Dsr_fortune_city from '../assets/dsr_satvik_fortune_city.jpeg'
import Footer from '../components/shared/Footer'
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useViewportSize } from '@mantine/hooks'
import { Carousel } from '@mantine/carousel';
import dsr_rotuemap from '../assets/dsr_routemap.png'
import dsr_location from '../assets/dsr_location.png'

function Satvikfurtuneprojectpage() {
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
                                    <img src={Dsr_fortune_city} width="100%" height="100%" />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={dsrgallery1} width="100%" height="100%" />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={dsr_location} width="100%" height="100%" />
                                </Carousel.Slide>
                            </Carousel>
                        </div>
                    </div>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcontactform
                        pdf={Satvik_Fortune}
                        project_name="DSR Satvik Fortune City"
                    />
                </Grid.Col>
            </Grid>
            <Container size={1400}>
                <Grid my={50}>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Image src={Dsr_fortune_city} alt='img' height={300} />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Stack>
                            <Text ta="center" fw={700} style={{ fontSize: "24px" }}>Satvik Fortune City</Text>
                            <Text>
                                DSR Fortune City is a prestigious, BMRDA-approved residential layout located in the thriving suburb of Hoskote,
                                Bangalore. Spread over a vast expanse, this well-planned township offers a perfect blend of urban connectivity
                                and serene living, designed to meet the aspirations of modern homebuyers. With an array of plot sizes to choose
                                from, DSR Fortune City caters to both investors and families looking to build their dream homes.
                            </Text>
                            <Group>
                                <Button leftSection={<IconDownload size={18} />} size='md' component='a' href={Satvik_Fortune} download="Satvik_Fortune">Download Brochure</Button>
                            </Group>
                        </Stack>
                    </Grid.Col>
                </Grid>
                <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} py={30}>Project Highlights</Text>
                    <List spacing={10}>
                        <List.Item><Text fw={700} component='span'>BMRDA-Approved Layout:</Text> Assured regulatory compliance, ensuring a secure investment.</List.Item>
                        <List.Item><Text fw={700} component='span'>Prime Location:</Text> Strategically located right on the National Highway, offering seamless connectivity.</List.Item>
                        <List.Item><Text fw={700} component='span'>Proximity to VIT University:</Text> Just adjacent to the upcoming 100-acre VIT University campus, promising future growth and value appreciation.</List.Item>
                        <List.Item><Text fw={700} component='span'>Eco-Friendly Development:</Text> Emphasis on sustainable and green living spaces.
                            Modern Infrastructure: Wide roads, landscaped gardens, and top-tier civic amenities.
                            24/7 Security: Gated community with advanced security systems for your peace of mind.</List.Item>
                        <List.Item> <Text fw={700} component='span'>Location Advantage:</Text>
                            Bang on National Highway (NH-75): Ensures easy access to all parts of Bangalore and beyond.</List.Item>
                        <List.Item><Text fw={700} component='span'>Educational Hub:</Text> Direct access to the upcoming VIT University campus, a renowned institution spanning over 100 acres, offering future-proof growth and high rental demand.</List.Item>
                        <List.Item><Text fw={700} component='span'>Business & Commercial Connectivity:</Text> Quick access to IT hubs like Whitefield, KR Puram, and key industrial zones.</List.Item>
                        <List.Item><Text fw={700} component='span'>Health & Wellness:</Text> Proximity to top hospitals and healthcare centers like Narayana Health and Manipal Hospital.</List.Item>
                        <List.Item><Text fw={700} component='span'>Recreation & Lifestyle:</Text> Shopping malls, entertainment centers, and restaurants are just a short drive away.  </List.Item>
                    </List>
                </div>
                <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={30}>Why Invest in DSR Fortune City?</Text>
                    <Text>
                        Future Appreciation: The development of the VIT University campus is poised to create immense demand for residential and rental properties in the vicinity.
                        Excellent Connectivity: The project is ideally located on NH-75, connecting Hoskote with key areas of Bangalore such as Whitefield, ITPL, and Old Madras Road.
                        High Growth Corridor: Hoskote is one of Bangalore’s most rapidly developing zones, with infrastructural advancements and numerous upcoming commercial projects.
                        Serene Living Environment: Enjoy the tranquility of suburban living with lush green surroundings and world-class amenities, all within a stone’s throw from urban conveniences.</Text>

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
                <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={20}>Plot Options:</Text>
                    <List spacing={10}>
                        <List.Item>Choose from a variety of plot sizes to build your dream home or make a secure investment</List.Item>
                        <List.Item>BMRDA Approved: Ensures all legal clearances and compliance.a</List.Item>
                        <List.Item>RERA Compliant: Offering full transparency and protection for buyers.</List.Item>
                        <List.Item>Master Plan & Layout: Include the master plan image and layout options here</List.Item>
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
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15564.848004848904!2d77.65383480000001!3d12.76473995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ecacda35401%3A0x4dfe4672a7c89184!2sHaragadde%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1727801959750!5m2!1sen!2sin" width="600" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Stack>
                                <Text fw={600} size='lg'>For Enquiries contact:</Text>
                                <Text>38/A, Dyavasandra Village, Haragadde Post, Anekal Taluk, Bangalore Urban, <br /> Karnataka- 560099.</Text>
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

export default Satvikfurtuneprojectpage