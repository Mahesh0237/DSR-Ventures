import { BackgroundImage, Button, Card, Center, Checkbox, Container, Divider, Grid, Group, LoadingOverlay, Select, Stack, Text, Textarea, TextInput } from '@mantine/core'
import React, { useRef, useState } from 'react'
import contactbg from '../../assets/explore.jpg'
import emailjs from '@emailjs/browser'
import { notifications } from '@mantine/notifications'
import { IconBrandWhatsapp, IconDownload, IconPhoneCall } from '@tabler/icons-react'
import Satvi_fortune_brochure from '../../assets/brochure/Satvi_fortune_brochure.pdf'
function Contactform() {
    const [isLoadingEffect, setIsLoadingEffect] = useState(false)
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
        setPhoneNumber(e.currentTarget.value)
        setPhoneNumberError('')
    }
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
        }
        if (phoneNumber === '') {
            setPhoneNumberError('enter phone number')
            setIsLoadingEffect(false)
            return false
        }

        emailjs
            .sendForm('service_4nqr9zl', 'template_m9b92vo', form.current, {
                publicKey: 'Or1S7AvX78z2ZfC7-',
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
        <div style={{ backgroundColor: '#19191994' }}>
            <form ref={form} onSubmit={handleSubmit}>
                <Card withBorder >
                    <Card.Section inheritPadding withBorder py={10}>
                        <Text ta="center" fw={700} size='lg'>Pre-register here for best offers</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder py={10}>
                        <Stack>
                            <TextInput
                                placeholder='Enter Name'
                                label="Name"
                                withAsterisk
                                name="name"
                                value={name}
                                error={nameError}
                                onChange={updateName}
                            />
                            <TextInput
                                placeholder='Enter email'
                                label="Email"
                                withAsterisk
                                name='email'
                                value={email}
                                error={emailError}
                                onChange={updateEmail}
                            />
                            <TextInput
                                placeholder='Enter phone number'
                                label="Phone Number"
                                withAsterisk
                                name='phoneNumber'
                                type='number'
                                value={phoneNumber}
                                error={phoneNumberError}
                                onChange={updatePhonNumber}
                            />
                            <Checkbox label="Agree to our Disclaimer and Terms and Conditions." size='xs' />

                            <Button fullWidth size='md' color='dark' onClick={handleSubmit}>Pre Register Here</Button>

                            <Divider label="OR" labelPosition="center" size="md" />

                            <Text fw={500} size='lg' ta="center">Call Us: +91-9071288899</Text>
                            <Text ta="center">For more information</Text>
                            <Button leftSection={<IconDownload size={18} />} size='md' variant='outline' color='yellow' component='a' href={Satvi_fortune_brochure} download="pruthvi_homes">Download Brochure</Button>
                        </Stack>
                    </Card.Section>
                    <LoadingOverlay visible={isLoadingEffect} />
                </Card>
            </form>
        </div>
    )
}

export default Contactform