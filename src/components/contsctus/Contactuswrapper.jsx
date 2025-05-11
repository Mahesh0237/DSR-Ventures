import React, { useRef, useState } from 'react'
import Enquireyform from '../homewrapper/shared/Enquireyform'
import contactus from '../../assets/contactuspage.jpeg'
import { Button, Container, Grid, Image, isLightColor, LoadingOverlay, Stack } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import emailjs from '@emailjs/browser'
function Contactuswrapper() {
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

    const [message, setMessage] = useState('')
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
        <>
            <main className="contact-page margin-top-page" >
                <Container size={1600} my={50}>
                    <Grid style={{ marginTop: "200px" }}>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Image
                                src={contactus}
                                alt='img'
                                height={400}
                                width={300}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <div className="form-part">
                                <div className="form-wrapper relative">
                                    <form ref={form} onSubmit={handleSubmit}>
                                        <div className="form-row">
                                            <div className="form-row-item">
                                                <label htmlFor="name">Name <span>*</span></label>
                                                <input
                                                    placeholder="Enter your full name"
                                                    required
                                                    value={name}
                                                    onChange={updateName}
                                                    name='name'
                                                />
                                            </div>
                                            <div className="form-row-item">
                                                <label htmlFor="email">Email <span>*</span></label>
                                                <input
                                                    placeholder="Enter your email address"
                                                    required
                                                    value={email}
                                                    onChange={updateEmail}
                                                    name='email'
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-row-item">
                                                <label htmlFor="phone">Phone number <span>*</span></label>
                                                <input
                                                    placeholder="Enter your phone number"
                                                    required
                                                    type='number'
                                                    name='phoneNumber'
                                                    value={phoneNumber}
                                                    onChange={updatePhonNumber}
                                                    pattern="\d{10}"
                                                    maxLength={10}
                                                />
                                            </div>
                                            {/* <div className="form-row-item">
                                                <label htmlFor="subject">Subject <span>*</span></label>
                                                <input placeholder="Enter the date you are free" required />
                                            </div> */}
                                        </div>
                                        <div className="form-row">
                                            <div className="form-row-full">
                                                <label htmlFor="message">Message</label>
                                                <textarea
                                                    cols="40" rows="2"
                                                    placeholder="Tell us a little bit about your inquiry"
                                                    name='message'
                                                    value={message}
                                                    onChange={updateMessage}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="form-row form-submit">
                                            <div className="form-row-full">
                                                <Button fullWidth size='lg' color='teal' type='submit'>Submit</Button>
                                            </div>
                                        </div>
                                    </form>
                                    <LoadingOverlay visible={isLoadingEffect} />
                                </div>
                            </div>
                        </Grid.Col>
                    </Grid>
                    <Stack mt={100}>
                        <Enquireyform />
                    </Stack>
                </Container>
            </main>
        </>
    )
}

export default Contactuswrapper