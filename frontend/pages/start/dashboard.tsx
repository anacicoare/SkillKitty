import Layout from "@/contents/layout/Layout";
import React, { useEffect, useState } from "react";
import { Card, Image, Text, Badge, Button, Group, Textarea } from '@mantine/core';
import axios from "axios";
import { useForm } from "@mantine/form";
import { SplitButton } from "@/contents/components/splitbutton/SplitButton";



export default function Dashboard() {
    const [showForm, setShowForm] = useState(false);
    const [value, setValue] = useState<string[]>([]);

    const handleSubmit = (values: any) => {
        setShowForm(false);
    }
    
    const form = useForm({
        initialValues: { skill: ''},

        // functions will be used to validate values at corresponding key
        validate: {
            skill: (value) => {
                if (!value) {
                    return 'Write the skill please!';
                }
                if (value.length > 200) {
                    return 'What even is that?!';
                }
                return null;
            },
        },
    });

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        // request all user skills
        const currentSkills = axios.get('http://localhost:8080/api/assigned-objectives/get/' + localStorage["email"]).then(
            (response: any) => {setSkills(response);}
        ).catch((err : any) => {
            console.log(err);
            setSkills(["Java", "Python"] as any);

            console.log(skills);
        })

        

    }, [])

    return (
        <React.Fragment>
            <Layout title="dashboard" skills={skills} >
            {showForm && (
            <div className="flex items-center justify-center fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75" style={{zIndex:"10000"}}>
                <Card
                    className="flex-row"
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                    style={{ width: "500px", height:"289px"}}
                >
                    <form noValidate onSubmit={form.onSubmit(handleSubmit)}>
                        {/* ... Your form fields go here */}
                                <SplitButton className="w-full flex justify-center ml-20 align-center" value={value} setValue={setValue} />
                        <br /> <br />
                        <div className="flex flex-col justify-center align-center">
                            <Button
                                variant="gradient"
                                gradient={{ from: 'rgba(104, 152, 242, 1)', to: 'pink', deg: 196 }}
                                type='submit'
                                mt="xl"
                                onClick={() => {
                                    console.log({
                                        "email": localStorage["email"],
                                        "objectives": value
                                    });

                                    const currentSkills = axios.post('http://localhost:8080/api/assigned-objectives/post', {
                                        "email": localStorage["email"],
                                        "objectives": value
                                     }).then(
                                         () => { location.reload(); }
                                    ).catch((err : any) => {
                                        console.log(err);
                                        //location.reload();
                                    })
                                }}
                            >
                                Add new skills
                            </Button>
                            <Button
                                variant="gradient"
                                gradient={{ from: 'rgba(104, 152, 242, 1)', to: 'pink', deg: 196 }}
                                onClick={() => setShowForm(false)}
                                mt="xl"
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        )}
                <div className="flex justify-center mt-10">
                    <div className="flex-collumn mr-5">
                        <Image className='flex shrink-0 -ml-5'
                        src="/pisutelefon-01.png"
                        style={{ width: 500, height: 500}}
                        alt="Coding" />
                        <Button  variant="gradient" gradient={{ from: 'rgba(104, 152, 242, 1)', to: 'pink', deg: 196 }}
                        fullWidth mt="xl" onClick = {() => setShowForm(true)}>
                            Add new skill
                        </Button>
                    </div>
                <Card className="flex-row shrink-0" shadow="sm" padding="lg" radius="md" withBorder style={{width: '500px'}}>
                    <Card.Section>
                        <Image
                        src="https://t3.ftcdn.net/jpg/03/48/39/74/360_F_348397404_wXuf22GUPNAh67htBZZnaDSx3Bj92yep.jpg"
                        height={160}
                        alt="Coding"
                        />
                    </Card.Section>

                    <Group className="justify-between" mt="md" mb="xs">
                     <Text fw={500}>🐾 Welcome, fellow coder! 🐾</Text>
                        {/* <Badge color="pink" variant="light">
                            Java
                        </Badge> */}
                    </Group>

                    <Text size="sm" c="dimmed">
                    I'm your coding companion on this pawsome journey to sharpen your programming skills. Let's embark on a meowgical adventure together and unleash the purrfection in your code!
                    <br /> Whether you're a seasoned developer or a curious beginner, this space is dedicated to enhancing your programming progress.
                    <br /> <br />
                    🚀 Ready to level up your skills? Let's dive into the world of coding brilliance! 🚀
                    <br /> <br />
                    Just remember, when in doubt, always paws for a moment and then continue coding! 🐱✨
                    </Text>

                </Card> 
                </div>

            </Layout>

            
        </React.Fragment>);
}