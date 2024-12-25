import { Text } from '@mantine/core'
import React from 'react'
function projectdetail({img, name, desc}) {
    return (
        <>
            <section className="listings-result-section mb-5" >
                <div className="section-wrapper">
                    <div id="listings-wrapper">
                        <div className="property-wrapper">
                            <div className="just-sold-property property-slider">
                                <div className="slide">
                                    <div className="just-sold-property-wrapper">
                                        <div className="image-part is-inview" >
                                            <div className="box-1">
                                                <div></div>
                                            </div>
                                            <img src={img} width="500px" height="100px"/>
                                        </div>
                                        <div className="content-part is-inview">
                                            <h2 className="heading-h2">{name}</h2>
                                            <div className="heading-p">
                                                <p>{desc}</p>
                                            </div>
                                            <div className="heading-button-wrapper">
                                                <a className="button-outline-arrow" href="#">View Listing</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default projectdetail