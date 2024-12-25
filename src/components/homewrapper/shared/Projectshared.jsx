import { Badge, Button, Card, Group, Image, Text } from '@mantine/core'
import React from 'react'

function Projectshared({ img, name, projectinfo }) {
    return (
        <Card  padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src={img}
                    height={250}
                    alt="Norway"
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{name}</Text>
            </Group>

            <Text size="sm" >{projectinfo} </Text>

            <Button color="blue" variant='light' fullWidth mt="md" radius="md">
                View More
            </Button>
        </Card>
    )
}

export default Projectshared