import React from 'react'
import farm4 from '../../assets/about.avif'
function Aboutuswrapper() {
    return (
        <main className="about-page margin-top-page">
            <section className="about-section">
                <div className="heading-section">
                    <div className="section-wrapper">
                        <div className="image-wrapper ms-5">
                            <img src={farm4} alt='aboutus' width="100%" height={400} />
                        </div>
                        <div className="heading-wrapper">
                            <h2>About <span>Us</span></h2>
                        </div>

                    </div>
                </div>
            </section>
            <section className="space-section-main">
                <div className="section-wrapper">
                    <h3>Our Company.</h3>
                    <p>
                        DSR VENTURES was established in 2011, with apartment
                            construction as its main focus, we strive to build superior
                            apartments for our customers with the highest level of quality
                            construction services at fair and market competitive prices.
                            We research, analyze, and determine the best cost-effective and
                            regulatory design to suit our customer needs. We accomplish this
                            by listening to our clients' needs and concerns and addressing them
                            in a timely and effective fashion. Our name is synonymous with quality
                            and timely delivery. Our reputation is built on the strength of our relationships
                            with our clients. We take great pride in our accomplishments and build on them every day.
                    </p>
                </div>
            </section>
            <section className="space-section">
                <div className="heading-wrapper">
                    <div className="space-wrapper bgs">
                        <div className="space-content">
                            <div className="content-block"><h3>Our Mission</h3><p>We also take great pride in being a customer-focused organization. This “customer-first” philosophy is constantly translated into trailblazing services and innovative activities. There are many dreams that inspire DSR VENTURES. Many avenues that await exploration. Many worlds that beckon us. It promises to be a glorious journey for DSR VENTURES. Check out for various options for plots in Bangalore. Travel with us -- and together, let’s celebrate our milestones and our achievements . </p></div>
                            <div className="content-block"><h3>GROUP LINEAGE</h3><p>At DSR VENTURES, we value your time and your money. We understand that not only should your index be a refuge from the storms of life but also should give you excellent return on investment (ROI). Delivery schedules are strictly adhered to, and “value-for-money” is not just another buzz term with us: it’s a business philosophy.
                                We also take great pride in being a customer-focused organization. This “customer-first” philosophy is constantly translated into trailblazing services and innovative activities..</p></div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Aboutuswrapper