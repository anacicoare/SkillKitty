import React, { useState } from "react";
import { Card, Image, Text, Badge, Button, Group, TextInput, PasswordInput, Textarea } from '@mantine/core';
import { useForm } from "@mantine/form";
import Link from "next/link";

const questions = [
    {
        "question": "Where can I start learning Java?",
        "summary" : "I am a beginner and I want to learn Java. Where can I start?"
    },
    {
        "question": "What is the difference between Java and JavaScript?",
        "summary" : "I want to learn Java. Where can I start?"
    },
    {
        "question": "Can you explain the principles of OOP?",
        "summary": "What are the most important principles of OOP?"
    },
    {
        "question": "How do i create a game in Java?",
        "summary": "I want to create a game in Java. Where can I start?" 
    },
    {
        "question": "Code review",
        "summary": "What does this line of code do? (object.add(1,2)) "
    },
]


export default function Community() {
    const [showForm, setShowForm] = useState(false);

    const form = useForm({
        initialValues: { question: '', summary: '' },

        // functions will be used to validate values at corresponding key
        validate: {
            question: (value) => (value.length < 2 ? 'Be more specific about the topic' : null),
            summary: (value) => {
                if (!value) {
                    return 'Tell us more about your problem';
                }
                if (value.length > 200) {
                    return 'Summary is too long';
                }
                return null;
            },
        },
    });

    const handleSubmit = (values: any) => {
        setShowForm(false);
    }

    return (<React.Fragment>
        <div className='flex justify-center items-center mx-auto'>
            <Button size='md' variant="gradient" gradient={{ from: 'rgba(104, 152, 242, 1)', to: 'pink', deg: 196 }} className='mr-20'
                onClick={() => setShowForm(true)}
            >
            Add a new question
            </Button>
        </div>

        {showForm && (
            <div className="flex items-center justify-center fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75" style={{zIndex:"10000"}}>
                <Card
                    className="flex-row"
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                    style={{ width: "500px", height:"400px"}}
                >
                    <form noValidate onSubmit={form.onSubmit(handleSubmit)}>
                        {/* ... Your form fields go here */}
                        <Textarea
                    autoFocus
                    autoComplete='on'
                    name='question'
                    label="Question"
                    size="lg" // Set the size to 'lg' for larger input
                    placeholder="Write your question here"
                    required {...form.getInputProps('question')}
                    />

                        <Textarea
                            autoFocus
                            autoComplete='on'
                            name='summary'
                            label="Summary"
                            size="lg"
                            placeholder="Detail your question here"
                            required {...form.getInputProps('summary')}
                        />
                        <Button
                            variant="gradient"
                            gradient={{ from: 'rgba(104, 152, 242, 1)', to: 'pink', deg: 196 }}
                            type='submit'
                            fullWidth
                            mt="xl"
                        >
                            Post
                        </Button>
                        <Button
                            variant="gradient"
                            gradient={{ from: 'rgba(104, 152, 242, 1)', to: 'pink', deg: 196 }}
                            onClick={() => setShowForm(false)}
                            fullWidth
                            mt="xl"
                        >
                            Cancel
                        </Button>
                    </form>
                </Card>
            </div>
        )}

        <div className="flex flex-wrap justify-center">
        {questions.map((item: any) => {
            return <div className="flex relative flex-wrap justify-around m-4" key={item["question"]} style={{ width: "300px", height:"350px", zIndex:0}}>
                <Card className="flex-row" shadow="sm" padding="lg" radius="md" withBorder >
                    <Card.Section>
                        <Image
                        src="https://t3.ftcdn.net/jpg/03/48/39/74/360_F_348397404_wXuf22GUPNAh67htBZZnaDSx3Bj92yep.jpg"
                        height={160}
                        alt="Coding"
                        />
                    </Card.Section>

                    <Group className="justify-between" mt="md" mb="xs">
                     <Text fw={500}>{item["question"] }</Text>
                        {/* <Badge color="pink" variant="light">
                            Java
                        </Badge> */}
                    </Group>

                    <Text size="sm" c="dimmed">
                        {item["summary"]}
                    </Text>

                    <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                        Enter conversation
                    </Button>
                </Card> 
                </div>
         })} </div>
    </React.Fragment>
    );
}
