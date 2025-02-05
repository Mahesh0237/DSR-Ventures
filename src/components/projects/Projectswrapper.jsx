import React, { useRef } from 'react'
import { Carousel } from '@mantine/carousel'
import projectslide1 from '../../assets/projectslide1.jpg'
import projectslide2 from '../../assets/projectslide2.jpg'
import projectslide3 from '../../assets/projectslide3.jpg'
import Autoplay from 'embla-carousel-autoplay';
import { useViewportSize } from '@mantine/hooks'
import { Button, Card, Container, Grid, Group, Image, Text } from '@mantine/core'
import Enquireyform from './../homewrapper/shared/Enquireyform'
import Projectdetail from './projectdetail'
import slider11 from '../../assets/slider11.jpeg'
import slider14 from '../../assets/slider14.jpeg'
import project0 from '../../assets/project3.png'
import project1 from '../../assets/project1.jpg'
import project2 from '../../assets/greenwoodmedwoos.png'
import project3 from '../../assets/green-avenues.jpg'
import project4 from '../../assets/satvikamogaplot.png'
import Sathvikavenue1 from '../../assets/Sathvikavenue1.jpeg'
import sathvikelitebanner2 from '../../assets/sathvikelitebanner2.jpg'
function Projectwrapper() {
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
                <Text ta="center" fw={700} my={30} style={{ fontSize: "30px" }}>Projects</Text>
                <Grid>
                    <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                    src={project0}
                                    height={260}
                                    alt="Norway"
                                    style={{ objectFit: "fill" }}
                                />
                            </Card.Section>
                            <Group justify="space-between" mt="md" >
                                <Text fw={700} style={{ fontSize: "20px" }} ta="center">Sathvik Fortune City</Text>

                            </Group>
                            <Text ta="justify" py={20}>DSR Fortune City is a prestigious, BMRDA-approved residential layout located in the thriving suburb of Hoskote, Bangalore.</Text>
                            <Button variant="filled" color='#0b9444' size='md' component='a' href='/satvikprojectdetails'>View Details</Button>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                    src={project4}
                                    height={260}
                                    alt="Norway"
                                    style={{ objectFit: "fill" }}
                                />
                            </Card.Section>
                            <Group justify="space-between" mt="md" >
                                <Text fw={700} style={{ fontSize: "20px" }} ta="center">Sathvik Amoga Plots</Text>

                            </Group>
                            <Text ta="justify" py={20}>Bangalore is fast developing into a world class city with stateof-the art infrastructure to meet the growing.</Text>
                            <Button variant="filled" color='#0b9444' size='md' component='a' href='/satvikamogaplots'>View Details</Button>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                    src={Sathvikavenue1}
                                    height={260}
                                    alt="Norway"
                                    style={{ objectFit: "fill" }}
                                />
                            </Card.Section>
                            <Group justify="space-between" mt="md" >
                                <Text fw={700} style={{ fontSize: "20px" }} ta="center">Sathvik Avenues</Text>

                            </Group>
                            <Text ta="justify" py={20}>Proximity to VIT University: Just adjacent to the upcoming 100-acre VIT University campus, promising future growth.</Text>
                            <Button variant="filled" color='#0b9444' size='md' component='a' href='/sathvikavenue'>View Details</Button>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                    src={project1}
                                    height={260}
                                    alt="Norway"
                                    style={{ objectFit: "fill" }}
                                />
                            </Card.Section>
                            <Group justify="space-between" mt="md" >
                                <Text fw={700} style={{ fontSize: "20px" }} ta="center">PRERANA GREENS</Text>

                            </Group>
                            <Text ta="justify" py={20}>We have a just added a lot more space into your life.Here's PRERANA INNOVATION DEVELOPERS.</Text>
                            <Button variant="filled" color='#0b9444' size='md' component='a' href='/preranagreensdetails'>View details</Button>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                    src={project2}
                                    height={260}
                                    alt="Norway"
                                    style={{ objectFit: "fill" }}
                                />
                            </Card.Section>
                            <Group justify="space-between" mt="md" >
                                <Text fw={700} style={{ fontSize: "20px" }} ta="center">GREENWOOD MEADOWS</Text>

                            </Group>
                            <Text ta="justify" py={20}>D.C.Converted residential sites in fully developed plotted layout in Maragondanahalli,</Text>
                            <Button variant="filled" color='#0b9444' size='md' component='a' href='#'>View details</Button>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                    src={project3}
                                    height={260}
                                    alt="Norway"
                                    style={{ objectFit: "fill" }}
                                />
                            </Card.Section>
                            <Group justify="space-between" mt="md" >
                                <Text fw={700} style={{ fontSize: "20px" }} ta="center">Green Avenues</Text>

                            </Group>
                            <Text ta="justify" py={20}>Green Avenues residential sites in fully developed plotted layout in Ramsandra village Narsapura.</Text>
                            <Button variant="filled" color='#0b9444' size='md' component='a' href='/greenavenuesdetails'>View Details</Button>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                    src={sathvikelitebanner2}
                                    height={260}
                                    alt="Norway"
                                    style={{ objectFit: "fill" }}
                                />
                            </Card.Section>
                            <Group justify="space-between" mt="md" >
                                <Text fw={700} style={{ fontSize: "20px" }} ta="center">Sathvik  Elite</Text>

                            </Group>
                            <Text ta="justify" py={20}>Sathvik Elite Farms is strategically located near Hoskote in Karnataka.</Text>
                            <Button variant="filled" color='#0b9444' size='md' component='a' href='/sathvikelite'>View Details</Button>
                        </Card>
                    </Grid.Col>
                </Grid>
                {/* <div style={{ height: updateheight, display: 'flex' }}>
                    <Carousel
                        withControls={false}
                        withIndicators
                        height="100%"
                        dragFree
                        slideSize="33.333333%"
                        slideGap="md"
                        align="start"
                        style={{ flex: 1 }}
                        plugins={[autoplay.current]}
                        onMouseEnter={autoplay.current.stop}
                        onMouseLeave={autoplay.current.reset}
                    >
                        <Carousel.Slide>
                            <Card shadow="sm" padding="lg" radius="md" withBorder>
                                <Card.Section>
                                    <Image
                                        src={project1}
                                        height={260}
                                        alt="Norway"
                                    />
                                </Card.Section>
                                <Group justify="space-between" mt="md" >
                                    <Text fw={700} style={{ fontSize: "20px" }} ta="center">PRERANA GREENS</Text>

                                </Group>
                                <Text ta="justify" py={20}>We have a just added a lot more space into your life.Here's PRERANA INNOVATION DEVELOPERS.</Text>
                                <Button variant="filled" color='teal' size='md' component='a' href='/projectdetails'>View details</Button>
                            </Card>
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Card shadow="sm" padding="lg" radius="md" withBorder>
                                <Card.Section>
                                    <Image
                                        src={project2}
                                        height={260}
                                        alt="Norway"
                                    />
                                </Card.Section>
                                <Group justify="space-between" mt="md" >
                                    <Text fw={700} style={{ fontSize: "20px" }} ta="center">GREENWOOD MEADOWS</Text>

                                </Group>
                                <Text ta="justify" py={20}>D.C.Converted residential sites in fully developed plotted layout in Maragondanahalli,</Text>
                                <Button variant="filled" color='teal' size='md' component='a' href='#'>View details</Button>
                            </Card>
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Card shadow="sm" padding="lg" radius="md" withBorder>
                                <Card.Section>
                                    <Image
                                        src={project3}
                                        height={260}
                                        alt="Norway"
                                    />
                                </Card.Section>
                                <Group justify="space-between" mt="md" >
                                    <Text fw={700} style={{ fontSize: "20px" }} ta="center">Green Avenues</Text>

                                </Group>
                                <Text ta="justify" py={20}>Green Avenues residential sites in fully developed plotted layout in Ramsandra village Narsapura.</Text>
                                <Button variant="filled" color='teal' size='md' component='a' href='/greenavenuesdetails'>View Details</Button>
                            </Card>
                        </Carousel.Slide>
                    </Carousel>
                </div> */}

                <Projectdetail
                    img={slider11}
                    name="Incubating Growth"
                    desc="The only thing that is eternal is a piece of Classical Architecture, which shall withstand the test of time."
                />
                <section class="our-strategic-approach">
                    <div class="section-wrapper">
                        <div class="text-cols">
                            <h2 class="text-col text-heading">Our Strategic Approach</h2>
                            <div class="text-col text-content">
                                <div class="text-item">
                                    <h3 class="text-label">Advantages</h3>
                                    <p class="text-details">As DSR, we value transparency and professionalism in our operations. Our project decisions are backed by extensive market research, ensuring the delivery of high-quality products. Our approach involves design, landscaping, and infrastructure, taking community living to the next level and setting us apart in the market.</p>
                                </div>
                                <div class="text-item">
                                    <h3 class="text-label">Best Practices</h3>
                                    <p class="text-details">As DSR, we follow best practices that include concrete tests for strength assessment and the use of suitable vibrators for leveling and creating a smooth surface. To ensure accuracy, we employ GPS techniques to ensure verticality within limits. We strictly adhere to GFC drawings and conduct regular audits to maintain quality throughout the construction process.</p>
                                </div>
                                <div class="text-item">
                                    <h3 class="text-label">Buying Guide</h3>
                                    <p class="text-details">At DSR, we offer a transparent buying guide, supported by in-depth market research and professional business practices. Our commitment to delivering high-quality products is evident in our comprehensive approach that covers design, landscaping, and infrastructure. Our focus on community living sets us apart in the market.</p>
                                </div>
                                <div class="text-item">
                                    <h3 class="text-label">Referral program</h3>
                                    <p class="text-details">With DSR's referral program, you can trust our concrete tests for strength assessment and the use of suitable vibrators for leveling and creating a smooth surface. We ensure verticality within limits using GPS techniques, and our strict adherence to GFC drawings is backed by regular audits to maintain quality at every step of the construction process.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Projectdetail
                    img={slider14}
                    name="DSR Conventions "
                    desc="Hyderabad's premier luxury venue for international conferences and corporate events."
                />
                <Enquireyform />
            </Container>
        </main>
    )
}

export default Projectwrapper 