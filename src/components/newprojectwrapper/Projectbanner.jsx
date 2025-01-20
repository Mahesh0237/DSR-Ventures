import React from 'react'
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useViewportSize } from '@mantine/hooks'
import { Carousel } from '@mantine/carousel';
import slider1 from '../newprojectwrapper/newassets/slider1.jpg'
import slider2 from '../newprojectwrapper/newassets/slider2.jpg'
import slider3 from '../newprojectwrapper/newassets/slider3.jpg'
function Projectbanner() {
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
                    <img src={slider3} width="100%" height="100%" />
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src={slider2} width="100%" height="100%" />
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src={slider1} width="100%" height="100%" />
                </Carousel.Slide>
            </Carousel>
        </div>
    )
}

export default Projectbanner