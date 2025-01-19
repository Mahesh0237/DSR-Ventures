import React from 'react'
import { Stack } from '@mantine/core';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useViewportSize } from '@mantine/hooks'
import { Carousel } from '@mantine/carousel';
import slider3 from '../../assets/slider1.jpg'
import slider5 from '../../assets/slider5.jpeg'
import slider6 from '../../assets/slider6.jpeg'
import slider7 from '../../assets/slider7.jpeg'
import slider8 from '../../assets/slider8.jpeg'
import slider9 from '../../assets/slider9.jpeg'
import slider10 from '../../assets/slider10.jpeg'
import slider11 from '../../assets/slider11.jpeg'
import slider12 from '../../assets/slider12.jpeg'
import slider13 from '../../assets/slider13.jpeg'
import slider14 from '../../assets/slider14.jpeg'
import video from '../../assets/brochure/DSR.mp4'
import video2 from '../../assets/brochure/DSR2.mp4'
function Banner() {
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
        updateheight = height - 100
        updateleftpos = "28%"
    }
    return (
        <Stack>
            <div style={{ height: updateheight, display: 'flex' }}>
                <Carousel
                    withControls={false}
                    withIndicators
                    height="100%"
                    dragFree
                    
                    style={{ flex: 1 }}
                    plugins={[autoplay.current]}
                    onMouseEnter={autoplay.current.stop}
                    onMouseLeave={autoplay.current.reset}
                >
                    <Carousel.Slide>
                        <div style={{ width: '100%', height: '100%' }}>
                            <video controls autoPlay muted loop width="100%" height="100%">
                                <source src={video} type="video/mp4" />
                            </video>
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={{ width: '100%', height: '100%' }}>
                            <video controls muted loop width="100%" height="100%">
                                <source src={video2} type="video/mp4" />
                            </video>
                        </div>
                    </Carousel.Slide>
                    {/* <Carousel.Slide>
                        <img src={slider8} width="100%" height="100%" />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <img src={slider9} width="100%" height="100%" />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <img src={slider14} width="100%" height="100%" />
                    </Carousel.Slide> */}
                </Carousel>
            </div>
        </Stack>
    )
}

export default Banner