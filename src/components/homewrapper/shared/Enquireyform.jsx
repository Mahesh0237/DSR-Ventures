import React from 'react'
import house3 from '../../../assets/house-3.jpg'
function Enquireyform() {
    return (
        <section className="join-our-newsletter enquire-section">
            <div className="section-wrapper">
                <div className="join-our-newsletter-wrapper">
                    <div className="newsletter-text">
                        <h2 className="heading-h2">
                            <p>Enquire</p>
                        </h2>
                        <p className="heading-p-large" style={{marginLeft:"0px"}}>Take a step towards owning an experience. Get in touch with us to learn more about DSR Projects.</p>
                        <form className="contact-newsletter" style={{marginLeft:"0px"}}>
                            <div className="form-row">
                                <input placeholder="Enter your Name" required />
                            </div>
                            <div className="form-row">
                                <input placeholder="Enter your Phone" required />
                            </div>
                            <div className="form-row">
                                <input placeholder="Enter your email address" required />
                            </div>
                            <div className="form-row form-submit">
                                <div className="form-row-full">
                                    <div className="submit-button">
                                        <button type="button" name="submit" className="button-outline submit-btn-footer">
                                            <span className="box"><span></span></span>SUBMIT
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="disclaimer">Disclaimer: I authorize DSR projects and its representatives to Call, SMS, Email or Whatsapp me about its products and offers. This consent overrides any registration for DND and NDNC.</div>
                        </form>
                    </div>
                    <div className="newsletter-img">
                        <img src={house3} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Enquireyform