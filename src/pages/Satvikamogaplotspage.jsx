import React from 'react'
import Projectheader from '../components/newprojectwrapper/Projectheader'
import { Button, Container, Grid, Group, Image, List, Stack, Text } from '@mantine/core'
import Projectcontactform from '../components/newprojectwrapper/Projectcontactform'
import Satvik_amogaplot from '../assets/brochure/Sathvik_Amogha_Plots_Brochure.pdf'
import { IconDownload } from '@tabler/icons-react'
import dsrgallery1 from '../assets/dsr_gallery1.jpeg'
import dsrgallery2 from '../assets/dsr_gallery2.jpeg'
import dsrgallery3 from '../assets/dsr_gallery3.jpeg'
import dsrgallery4 from '../assets/dsr_gallery4.jpeg'
import satvikamogaplot from '../assets/satvikamogaplot.png'
import Footer from '../components/shared/Footer'
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useViewportSize } from '@mantine/hooks'
import { Carousel } from '@mantine/carousel';
import satvikamogaroutemap from '../assets/satvikamogaroutemap.png'
import dsr_location from '../assets/dsr_location.png'

function Satvikamogaplotspage() {
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
                                    <img src={satvikamogaplot} width="100%" height="100%" />
                                </Carousel.Slide>
                                {/* <Carousel.Slide>
                                    <img src={dsrgallery1} width="100%" height="100%" />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={dsr_location} width="100%" height="100%" />
                                </Carousel.Slide> */}
                            </Carousel>
                        </div>
                    </div>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcontactform
                        pdf={Satvik_amogaplot}
                        project_name="DSR Satvik Fortune City"
                    />
                </Grid.Col>
            </Grid>
            <Container size={1400}>
                <Grid my={50}>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Image src={satvikamogaplot} alt='img' height={450} />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Stack>
                            <Text ta="center" fw={700} style={{ fontSize: "24px" }}>Satvik Amoga Plots</Text>
                            <Text>
                                Bangalore is fast developing into a world class city with stateof-the art infrastructure to meet the growing needs of
                                discerning citizens. A hub of new generation enterprises a
                                head quarter of Real estate companies, a place with sizable
                                presence of the IT & BT companies. An attractive destination
                                for Local & international investments - truly a vibrant
                                economy and Cosmo society well connected by Rail, Road
                                and Air to the prominent cities in India and the rest of the
                                world - Bangalore is undoubtedly the Silicon Valley of India
                                and Knowledge Capital of India. Here, we are introducing the
                                great endeavor, DSR Ventures one of the largest vertically
                                integrated Real Estate Company in Bangalore.
                                Class living in peaceful and tranquil neighborhoods, where
                                fresh air, abundant water & blissful silence of countryside. The
                                beautiful park, the serene nature, Multipurpose Club house
                                with Swimming pool and many more within the property are
                                adding beauty to the Property.
                                A short pleasant drive across signal free roads of K R Puram
                                Biggest Hanging Bridge brings you to this green serene
                                location in less than few minutes’drive from Old Madras Road
                                Junction
                            </Text>
                            <Group>
                                <Button leftSection={<IconDownload size={18} />} size='md' component='a' href={Satvik_amogaplot} download="Satvik_amogaplot">Download Brochure</Button>
                            </Group>
                        </Stack>
                    </Grid.Col>
                </Grid>
                <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} py={30}>Project Highlights</Text>
                    <List spacing={10} listStyleType="disc">
                        <List.Item>45 Mins. drive from Baiyyapanahalli Metro Station</List.Item>
                        <List.Item>30 Mins. drive from International Airport</List.Item>
                        <List.Item>25 Mins. drive from ITPL</List.Item>
                        <List.Item>20 Mins. drive from K R Puram</List.Item>
                        <List.Item>10 Mins. drive from Hoskote</List.Item>
                        <List.Item>8 mins. from MVJ Medical College & Hospital</List.Item>
                        <List.Item>7 Mins. drive from Bangalore - Chennai Express Highway</List.Item>
                        <List.Item>3 Mins. from National Highway</List.Item>
                        <List.Item>Close to Sharanya Narayani Int. School</List.Item>
                        <List.Item>Very Near to Garden City Township</List.Item>
                    </List>
                </div>
                {/* <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={30}>Why Invest in DSR Fortune City?</Text>
                    <Text>
                        Future Appreciation: The development of the VIT University campus is poised to create immense demand for residential and rental properties in the vicinity.
                        Excellent Connectivity: The project is ideally located on NH-75, connecting Hoskote with key areas of Bangalore such as Whitefield, ITPL, and Old Madras Road.
                        High Growth Corridor: Hoskote is one of Bangalore’s most rapidly developing zones, with infrastructural advancements and numerous upcoming commercial projects.
                        Serene Living Environment: Enjoy the tranquility of suburban living with lush green surroundings and world-class amenities, all within a stone’s throw from urban conveniences.</Text>

                </div> */}
                <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={20}>World-Class Amenities:</Text>
                    <List spacing={10} listStyleType='disc'>
                        <List.Item>Grand Entrance Arch</List.Item>
                        <List.Item>Concrete Roads</List.Item>
                        <List.Item>Well Plantation</List.Item>
                        <List.Item>Underground Drainage System</List.Item>
                        <List.Item>Underground Water Connection for each plots</List.Item>
                        <List.Item>Well planned Electricity with Street lights</List.Item>
                        <List.Item>24 hrs. Water Supply with over head tank</List.Item>
                        <List.Item>Compound wall </List.Item>
                        <List.Item>Gated community </List.Item>
                    </List>
                </div>
                <div className='my-4'>
                    <Text fw={700} style={{ fontSize: "30px" }} pb={20}>Gallery</Text>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={satvikamogaplot} alt='img' height={300} />
                        </Grid.Col>
                        {/* <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={dsrgallery3} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={dsrgallery4} alt='img' height={300} />
                        </Grid.Col> */}
                    </Grid>
                </div>
                <div className='my-3'>
                    <Image src={satvikamogaroutemap} alt='img' w={`100%`} />
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

export default Satvikamogaplotspage