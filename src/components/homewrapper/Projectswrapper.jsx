import { Container, Grid, Group, Image, Stack, Text } from '@mantine/core'
import React, { useRef } from 'react'
import Projectshared from './shared/Projectshared'
import project1 from '../../assets/project1.jpg'
import project2 from '../../assets/greenwoodmedwoos.png'
import project3 from '../../assets/project3.png'
import project4 from '../../assets/home1.avif'
import project5 from '../../assets/satvikamogaplot.png'
import sathvikfusioncity from '../../assets/Sathvikfusioncity.png'
import farm4 from '../../assets/home2.avif'
import home3 from '../../assets/home3.avif'
import home4 from '../../assets/home4.avif'
import home5 from '../../assets/home5.avif'
import comingsoon from '../../assets/comingsoon.jpg'
import homepagedesign from '../../assets/homepagedesign.jpeg'
import explore from '../../assets/explore.jpg'
import Enquireyform from './shared/Enquireyform'
import { Carousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay';
import bank1 from '../../assets/bank1.png'
import bank2 from '../../assets/bank2.png'
import bank3 from '../../assets/bank3.png'
import bank4 from '../../assets/bank4.png'
import bank5 from '../../assets/bank5.png'
import bank6 from '../../assets/bank6.png'
import bank7 from '../../assets/bank7.png'
import bank8 from '../../assets/bank8.png'

function Projectswrapper() {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
    return (
        <main className="dsr-home-page">
            <section className="latest-listings">
                <div className="section-wrapper">
                    <div className="latest-listings-wrapper">
                        <div className="section-heading">
                            <h2>Our Latest Projects</h2>
                        </div>
                        <div className="latest-listings-slider">
                            <Group justify="center">
                                <div className="slide">
                                    <a className="main-part" href='/satvikprojectdetails'>
                                        <div className="img">
                                            <div className="box">
                                                <div></div>
                                            </div>
                                            <img src={project3} />
                                        </div>
                                        <h3>Sathvik Fortune City</h3>
                                        <div className="heading">
                                            <p>DSR Sathvik Fortune City is a prestigious, BMRDA-approved residential layout located in Bangalore.</p>
                                        </div>
                                        <div className="link">View More</div>
                                    </a>
                                </div>
                                <div className="slide">
                                    <a className="main-part" href='/satvikamogaplots'>
                                        <div className="img">
                                            <div className="box">
                                                <div></div>
                                            </div>
                                            <img src={project5} />
                                        </div>
                                        <h3>Sathvik Amogha Plots</h3>
                                        <div className="heading">
                                            <p>Bangalore is fast developing into a world class city with stateof-the art infrastructure. </p>
                                        </div>
                                        <div className="link">View More</div>
                                    </a>
                                </div>
                                <div className="slide">
                                    <a className="main-part" href='/sathvikfusioncity'>
                                        <div className="img">
                                            <div className="box">
                                                <div></div>
                                            </div>
                                            <img src={sathvikfusioncity} />
                                        </div>
                                        <h3>Dsr Sathvik Fusion City</h3>
                                        <div className="heading">
                                            <p>DSR Sathvik Fusion City is a prestigious, BMRDA - approved residential.  </p>
                                        </div>
                                        <div className="link">View More</div>
                                    </a>
                                </div>
                                <div className="slide">
                                    <a className="main-part" href='#'>
                                        <div className="img">
                                            <div className="box">
                                                <div></div>
                                            </div>
                                            <img src={comingsoon} />
                                        </div>
                                        <h3>DSR Sathvik Dream city</h3>
                                        {/* <div className="heading">
                                            <p>Experience a perfect blend of modern architecture, comfort, and convenience at Sathvik Fortune Square.</p>
                                        </div> */}
                                        <div className="link">
                                            View More
                                        </div>
                                    </a>
                                </div>
                                <div className="slide">
                                    <a className="main-part" href='#'>
                                        <div className="img">
                                            <div className="box">
                                                <div></div>
                                            </div>
                                            <img src={comingsoon} />
                                        </div>
                                        <h3>Dsr Sathvik Snow City</h3>
                                        {/* <div className="heading">
                                            <p>Experience a perfect blend of modern architecture, comfort, and convenience at Sathvik Fortune Square.</p>
                                        </div> */}
                                        <div className="link">
                                            View More
                                        </div>
                                    </a>
                                </div>
                                <div className="slide">
                                    <a className="main-part" href='#'>
                                        <div className="img">
                                            <div className="box">
                                                <div></div>
                                            </div>
                                            <img src={comingsoon} />
                                        </div>
                                        <h3>Dsr Sathvik Golden city</h3>
                                        {/* <div className="heading">
                                            <p>Experience a perfect blend of modern architecture, comfort, and convenience at Sathvik Fortune Square.</p>
                                        </div> */}
                                        <div className="link">
                                            View More
                                        </div>
                                    </a>
                                </div>
                            </Group>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <div className="section-wrapper">
                    <div className="testimonial-slider-wrapper">
                        <div className="testimonial-slide-inner">
                            {/* <div className="grey-box" ></div> */}
                            <div className="image-part" >
                                <Image
                                    src={homepagedesign}
                                    alt='img'
                                />
                            </div>
                            <div className="content-part">
                                <h2 className="heading-h2">
                                    <p>Driven by Design</p>
                                </h2>
                                <div className="heading-p-wrapper mobile-hide">
                                    <p>Driven by a passion for design, every creation is a seamless fusion of meticulous craftsmanship, aesthetic beauty, and functional innovation. Each project is thoughtfully crafted to not only captivate the eye but also to serve a practical purpose, ensuring that every detail works in harmony to create architectural brilliance. With a commitment to precision and artistry, we transform ideas into structures that are as functional as they are beautiful, reflecting a timeless approach to design excellence.</p>
                                </div>
                                <div className="heading-p-wrapper desktop-hide">
                                    <p>Driven by a passion for design, every creation is a seamless fusion of meticulous craftsmanship, aesthetic beauty, and functional innovation. Each project is thoughtfully crafted to not only captivate the eye but also to serve a practical purpose, ensuring that every detail works in harmony to create architectural brilliance. With a commitment to precision and artistry, we transform ideas into structures that are as functional as they are beautiful, reflecting a timeless approach to design excellence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='aboutus mb-5'>
                <Container size={1350}>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Stack p={15}>
                                <Text style={{ fontSize: "30px" }} fw={700}>Explore the Grandeur of Design Driven Projects</Text>
                                <Text size='lg'> Detail crafted with love to harmonise with your soul. surrounding to create a mesmerising living experience</Text>
                                <Text size='lg'>Classical Elegance in every inch bringing timeless charm and sophistication to your home</Text>
                                <Text size='lg'>An epitome of contemporary living, modern designs that are driven by captivating æsthetics and keen attention to detail</Text>
                            </Stack>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Carousel
                                withIndicators
                                height={350}
                                loop
                                withControls={false}
                                plugins={[autoplay.current]}
                                onMouseEnter={autoplay.current.stop}
                                onMouseLeave={autoplay.current.reset}
                            >
                                <Carousel.Slide>
                                    <img src={explore} height="100%" width="100%" alt='' />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={home3} height="100%" width="100%" alt='' />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={home4} height="100%" width="100%" alt='' />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={home5} height="100%" width="100%" alt='' />
                                </Carousel.Slide>
                            </Carousel>
                        </Grid.Col>
                    </Grid>
                </Container>
            </section>

            <section className='aboutus my-5'>
                <Container size={1350}>
                    <Grid mt={100}>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Carousel
                                withIndicators
                                height={350}
                                loop
                                withControls={false}
                                plugins={[autoplay.current]}
                                onMouseEnter={autoplay.current.stop}
                                onMouseLeave={autoplay.current.reset}
                            >
                                <Carousel.Slide>
                                    <img src={farm4} height="100%" width="100%" alt='' />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={home3} height="100%" width="100%" alt='' />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={home4} height="100%" width="100%" alt='' />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={home5} height="100%" width="100%" alt='' />
                                </Carousel.Slide>
                            </Carousel>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Stack px={25}>
                                <Text style={{ fontSize: "30px" }} ta="center" fw={700}>About Us</Text>
                                <Text size='lg'>
                                    DSR VENTURES was established in 2011, with Land Development and apartment construction as its main focus, we strive to build superior apartments for our customers with the highest level of quality construction services at fair and market competitive prices.

                                    We research, analyze, and determine the best cost-effective and regulatory design to suit our customer needs.</Text>

                            </Stack>
                        </Grid.Col>
                    </Grid>
                </Container>
            </section>
            <section className='aboutus my-5'>
                <Container size={1350}>
                    <Text style={{ fontSize: "30px" }} mb={20} fw={700}>Financial Partners</Text>
                    <Carousel
                        withIndicators
                        height={80}
                        loop
                        withControls={false}
                        plugins={[autoplay.current]}
                        onMouseEnter={autoplay.current.stop}
                        onMouseLeave={autoplay.current.reset}
                        slideSize="20%"
                        slideGap="md"
                    >
                        <Carousel.Slide>
                            <img src={bank1} height="100%" width="100%" alt='' />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <img src={bank2} height="100%" width="100%" alt='' />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <img src={bank3} height="100%" width="100%" alt='' />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <img src={bank4} height="100%" width="100%" alt='' />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <img src={bank5} height="100%" width="100%" alt='' />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <img src={bank6} height="100%" width="100%" alt='' />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <img src={bank7} height="100%" width="100%" alt='' />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <img src={bank8} height="100%" width="100%" alt='' />
                        </Carousel.Slide>
                    </Carousel>
                </Container>
            </section>
            <Enquireyform />
            <div className="enquiry-sticky">
                <a href='/projectsdetail'><div className="enquiry">Enquire Now</div></a>
            </div>
        </main>
    )
}

export default Projectswrapper