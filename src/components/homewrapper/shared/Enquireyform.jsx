import React, { useRef, useState } from 'react'
import house3 from '../../../assets/house-3.jpg'
import { Button, Container, Grid, Image, isLightColor, LoadingOverlay, Stack } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import emailjs from '@emailjs/browser'
function Enquireyform() {
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const updateName = (e) => {
        setName(e.currentTarget.value)
        setNameError('')
    }
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const updateEmail = (e) => {
        setEmail(e.currentTarget.value)
        setEmailError('')
    }

    const [phoneNumber, setPhoneNumber] = useState('')
    const [phoneNumberError, setPhoneNumberError] = useState('')
    const updatePhonNumber = (e) => {
        let value = e.currentTarget.value
        setPhoneNumber(value)
        if (value.length > 10) {
            setPhoneNumberError("please enter a valid phone number")
        } else {
            setPhoneNumberError('')
        }
    }

    const [message, setMessage] = useState('Enquired user')
    const [messageError, setMessageError] = useState('')
    const updateMessage = (e) => {
        setMessage(e.currentTarget.value)
        setMessageError('')
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^\d{10}$/
        return phoneRegex.test(phone)
    }
    const [isLoadingEffect, setIsLoadingEffect] = useState(false)
    const form = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoadingEffect(true)
        if (name === '') {
            setNameError('enter name')
            setIsLoadingEffect(false)
            return false
        }
        if (email === '') {
            setEmailError('enter email')
            setIsLoadingEffect(false)
            return false
        } else if (!validateEmail(email)) {
            setEmailError('Enter a valid email')
            setIsLoadingEffect(false)
            return false
        }
        if (phoneNumber === '') {
            setPhoneNumberError('enter phone number')
            setIsLoadingEffect(false)
            return false
        } else if (!validatePhoneNumber(phoneNumber) || phoneNumber.length > 10) {
            setPhoneNumberError('Enter a valid 10-digit phone number')
            setIsLoadingEffect(false)
            return false
        }
        if (message === '') {
            setMessageError('Please enter message')
            setIsLoadingEffect(false)
            return false
        }

        emailjs
            .sendForm('service_d7wvtei', 'template_k4xn7ns', form.current, {
                publicKey: 'bToSMvPR5w8Bzed1G',
            })
            .then(
                () => {
                    setIsLoadingEffect(false)
                    console.log('SUCCESS!')
                    form.current.reset()
                    notifications.show({
                        title: 'Sucess',
                        message: 'ThankYou we have received your message',
                        color: 'green'
                    })
                    setName('')
                    setEmail('')
                    setPhoneNumber('')
                    setMessage('')
                },
                (error) => {
                    setIsLoadingEffect(false)
                    console.log('FAILED...', error.text)
                    notifications.show({
                        title: 'Error',
                        message: error.text,
                        color: 'red'
                    })
                },
            )

    }
    return (
        <section className="join-our-newsletter enquire-section">
            <div className="section-wrapper">
                <div className="join-our-newsletter-wrapper">
                    <div className="newsletter-text">
                        <h2 className="heading-h2">
                            <p>Enquire</p>
                        </h2>
                        <p className="heading-p-large" style={{ marginLeft: "0px" }}>Take a step towards owning an experience. Get in touch with us to learn more about DSR Projects.</p>
                        <div style={{ position: "relative" }}>
                            <form ref={form} className="contact-newsletter" style={{ marginLeft: "0px" }} onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <input
                                        placeholder="Enter your Name" required
                                        value={name}
                                        onChange={updateName}
                                        name='name'
                                    />
                                </div>
                                <div className="form-row">
                                    <input
                                        placeholder="Enter your Phone"
                                        required
                                        type='number'
                                        name='phoneNumber'
                                        value={phoneNumber}
                                        onChange={updatePhonNumber}
                                        pattern="\d{10}"
                                        maxLength={10}
                                    />
                                </div>
                                <div className="form-row">
                                    <input
                                        placeholder="Enter your email address"
                                        required
                                        value={email}
                                        onChange={updateEmail}
                                        name='email'
                                    />
                                </div>
                                <div className="form-row">
                                    <textarea
                                        cols="40" rows="2"
                                        placeholder="Tell us a little bit about your inquiry"
                                        name='message'
                                        value={message}
                                        onChange={updateMessage}
                                        hidden
                                    ></textarea>
                                </div>
                                <div className="form-row form-submit">
                                    <div className="form-row-full">
                                        <div className="submit-button">
                                            <button type="submit" name="submit" className="button-outline submit-btn-footer">
                                                <span className="box"><span></span></span>SUBMIT
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="disclaimer">Disclaimer: I authorize DSR projects and its representatives to Call, SMS, Email or Whatsapp me about its products and offers. This consent overrides any registration for DND and NDNC.</div>
                            </form>
                            <LoadingOverlay visible={isLoadingEffect} />
                        </div>
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