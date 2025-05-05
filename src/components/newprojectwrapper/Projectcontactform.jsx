import { BackgroundImage, Button, Card, Center, Checkbox, Container, Divider, Grid, Group, LoadingOverlay, NumberInput, Select, Stack, Text, Textarea, TextInput } from '@mantine/core'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { notifications } from '@mantine/notifications'
import { IconDownload } from '@tabler/icons-react'
function Projectcontactform({ pdf, project_name }) {
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
    const updatePhonNumber = (value) => {
        setPhoneNumber(value)
        if (value.length > 10) {
            setPhoneNumberError("please enter a valid phone number")
        } else {
            setPhoneNumberError('')
        }
    }

    const [project, setProject] = useState(null)
    const [projectError, setProjectError] = useState('')
    const updateProject = (value) => {
        setProject(value)
        setProjectError('')
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
        if (project === null) {
            setProjectError('Select project')
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
                    setProject(null)
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
        <div style={{ backgroundColor: '#19191994' }}>
            <form ref={form} onSubmit={handleSubmit}>
                <Card withBorder >
                    <Card.Section inheritPadding withBorder py={10}>
                        <Text ta="center" fw={700} size='lg'>Pre-register here for best offers</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder py={10}>
                        <Stack gap={3}>
                            <TextInput
                                placeholder='Enter Name'
                                label="Name"
                                withAsterisk
                                name="name"
                                value={name}
                                error={nameError}
                                onChange={updateName}
                                autoComplete='off'
                            />
                            <TextInput
                                placeholder='Enter email'
                                label="Email"
                                withAsterisk
                                name='email'
                                value={email}
                                error={emailError}
                                onChange={updateEmail}
                                autoComplete='off'
                            />
                            <NumberInput
                                hideControls
                                placeholder='Enter phone number'
                                label="Phone Number"
                                withAsterisk
                                name='phoneNumber'
                                value={phoneNumber}
                                error={phoneNumberError}
                                onChange={updatePhonNumber}
                                autoComplete='off'
                            />
                            <Select
                                label="Project"
                                placeholder="Select Project"
                                searchable
                                name='project'
                                data={[
                                    { value: 'Sathvik Fortune City', label: 'Sathvik Fortune City' },
                                    { value: 'Sathvik Amogha City', label: 'Sathvik Amogha City' },
                                    { value: 'Sathvik Fusion City', label: 'Sathvik Fusion City' },
                                    { value: 'Sathvik Dream City', label: 'Sathvik Dream City' },
                                    { value: 'Sathvik Avenues', label: 'Sathvik Avenues' },
                                    { value: 'Prerana Greens', label: 'Prerana Greens' },
                                    { value: 'Greenwood Meadows', label: 'Greenwood Meadows' },
                                    { value: 'Green Avenues', label: 'Green Avenues' },
                                    { value: 'Sathvik Elite', label: 'Sathvik Elite' },
                                    { value: 'Sathvik Lotus Farm', label: 'Sathvik Lotus Farm' },
                                    { value: 'Sathvik Snow City', label: 'Sathvik Snow City' },
                                    { value: 'Sathvik Golden City', label: 'Sathvik Golden City' },
                                ]}
                                value={project}
                                onChange={updateProject}
                                error={projectError}
                            />
                            <Textarea
                                label="Message"
                                name='message'
                                placeholder="Enter Message"
                                value={message}
                                onChange={updateMessage}
                                error={messageError}
                            />
                            <Checkbox label="Agree to our Disclaimer and Terms and Conditions." size='xs' checked color='#0b9444' />
                            <Button fullWidth size='md' color='#0b9444' type='submit'>Pre Register Here</Button>
                            <Divider label="OR" labelPosition="center" size="md" />
                            <Group py={10}>
                                <Text fw={500} size='lg'>For more information Call Us: +91-9071288899</Text>
                            </Group>
                            <Button leftSection={<IconDownload size={18} />} size='md' variant='outline' color='#0b9444' component='a' href={pdf} download="Brochure">Download Brochure</Button>
                        </Stack>
                    </Card.Section>
                    <LoadingOverlay visible={isLoadingEffect} />
                </Card>
            </form>
        </div>
    )
}

export default Projectcontactform