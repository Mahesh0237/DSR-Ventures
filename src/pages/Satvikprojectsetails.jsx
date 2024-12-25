import React from 'react'
import Banner from '../components/homewrapper/Banner'
import { Accordion, Button, Card, Container, Grid, Group, Image, Stack, Text } from '@mantine/core'
import Satvi_fortune_brochure from '../assets/brochure/Satvi_fortune_brochure.pdf'
import { IconDownload } from '@tabler/icons-react'
import Footer from '../components/shared/Footer'
import gallery1 from '../assets/home4.avif'
import pool from '../assets/home5.avif'
import Header from '../components/shared/Header'
import Contactform from '../components/projects/Contactform'
function Satvikprojectsetails() {
    return (
        <div className="body-wrapper">
            <Header />
            <Grid mt={95}>
                <Grid.Col span={{ base: 12, md: 8, lg: 8 }}>
                    <div style={{ position: "relative" }}>
                        <Banner />
                    </div>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Contactform />
                </Grid.Col>
            </Grid>
            <Container size={1350}>
                <Stack my={50}>
                    <Text style={{ fontSize: "30px" }} fw={700} ta="center">Welcome to DSR Fortune City </Text>
                    <Text style={{fontSize:"20px"}} fw={600}>About DSR Fortune City:</Text>
                    <Text>
                    DSR Fortune City is a prestigious, BMRDA-approved residential layout located in the thriving suburb of Hoskote, Bangalore. Spread over a vast expanse, this well-planned township offers a perfect blend of urban connectivity and serene living, designed to meet the aspirations of modern homebuyers. With an array of plot sizes to choose from, DSR Fortune City caters to both investors and families looking to build their dream homes.
                    </Text>
                    <Group>
                        <Button leftSection={<IconDownload size={18} />} size='md' component='a' href={Satvi_fortune_brochure} download="pruthvi_homes">Download Brochure</Button>
                    </Group>
                </Stack>
                <div className='mb-5'>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Image src={pool} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Stack>
                                <Text ta="center" fw={700} style={{ fontSize: "24px" }}>Pruthvi Homes</Text>
                                <Text>Our endeavor is to create a unique world for you, one that transports you to a realm of fine living and indulgence.</Text>
                                <Text>It has a close proximity to all the public places; yet calm in its own nviron. The sheer verdant atmosphere boosted by the unique landscaping created by renowned designers,upled with the cutting edge lifestyle choices and the breathtaking aesthetics, ensure that you get the best of both worlds. These luxurious Apartments in Bangalore have more value than you could ever imagine.</Text>
                            </Stack>
                        </Grid.Col>
                    </Grid>
                </div>
                <div className='my-4'>
                    <Text fw={700} style={{ fontSize: "30px" }} pb={20}>Gallery</Text>
                    <Image src={gallery1} alt='img' height={400} />
                </div>
                <div className='my-4'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={20}>Location</Text>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15564.848004848904!2d77.65383480000001!3d12.76473995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ecacda35401%3A0x4dfe4672a7c89184!2sHaragadde%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1727801959750!5m2!1sen!2sin" width="600" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Stack>
                                <Text fw={600} size='lg'>For inquiries contact:</Text>
                                <Text>38/A, Dyavasandra Village, Haragadde Post, Anekal Taluk, Bangalore Urban, <br /> Karnataka- 560099.</Text>
                                <div>
                                    <Text fw={600}>Website</Text>
                                    <Text component='a' href='www.dsrventures.com' target='_blank'>www.dsrventures.com</Text>
                                </div>
                                <div>
                                    <Text fw={600}>Phone</Text>
                                    <Text>+91-8088955559</Text>
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

export default Satvikprojectsetails