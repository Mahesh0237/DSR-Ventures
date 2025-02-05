import React from 'react'
import { Stack } from '@mantine/core';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useViewportSize } from '@mantine/hooks'
import { Carousel } from '@mantine/carousel';
import video from '../../assets/brochure/DSR1.mp4'
import video2 from '../../assets/brochure/DSR2.mp4'
import video3 from '../../assets/brochure/DSR3.mp4'
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
            <div style={{ height: updateheight, display: 'flex', marginTop: "80px" }}>
                <Carousel
                    // withControls={false}
                    withIndicators
                    height="100%"
                    style={{ flex: 1 }}
                >
                    <Carousel.Slide>
                        {/* <div style={{ width: '100%', height: '100%' }}>
                            <video controls autoPlay muted loop width="100%" height="100%">
                                <source src={video} type="video/mp4" />
                            </video>
                        </div> */}
                        <div style={{ width: '100vw', height: '100%', overflow: 'hidden' }}>
                            <video
                                controls
                                autoPlay
                                muted
                                loop
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover' // Ensures the video fills the space without distortion
                                }}
                            >
                                <source src={video} type="video/mp4" />
                            </video>
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={{ width: '100vw', height: '100%', overflow: 'hidden' }}>
                            <video
                                controls
                                autoPlay
                                muted
                                loop
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover' // Ensures the video fills the space without distortion
                                }}
                            >
                                <source src={video2} type="video/mp4" />
                            </video>
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={{ width: '100vw', height: '100%', overflow: 'hidden' }}>
                            <video
                                controls
                                autoPlay
                                muted
                                loop
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover' // Ensures the video fills the space without distortion
                                }}
                            >
                                <source src={video3} type="video/mp4" />
                            </video>
                        </div>
                    </Carousel.Slide>
                </Carousel>
            </div>
        </Stack>
    )
}

export default Banner