import { Card, Image, Text, Badge, Button, Group, Divider, Progress, Checkbox, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';

const objectives = [
    {
        "objective": "Learn control statements",
        "status" : "Done"
    },
    {
        "objective": "Learn Algorithms",
        "status" : "In progress"
    },
    {
        "objective": "Learn functions",
        "status" : "In Progress"
    },
    {
        "objective": "Learn OOP",
        "status" : "In Progress"
    }
]

function assessCheckboxState(status: string) {

    console.log(status == "Done")
    return (status == "Done");
}

export default function Checklist() {
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = (values: any) => {
        setShowForm(false);
    }
    
    const form = useForm({
        initialValues: { objective: ''},

        // functions will be used to validate values at corresponding key
        validate: {
            objective: (value) => {
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

    const [value, setValue] = useState<string[]>([]);

    useEffect(() => {
        let checkedObjectives = [] as any;
        objectives.map((objective: any) => {
            if (objective["status"] == "Done")
                checkedObjectives.push(objective["objective"])
        })

        setValue(checkedObjectives);
    }, [])

    return <div className="flex float-right h-full pr-3 m-0" style={{width:"33%"}} >
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
                        <Textarea
                            autoFocus
                            autoComplete='on'
                            name='objective'
                            label="Objective"
                            size="lg"
                            placeholder="Write the new objective here"
                            required {...form.getInputProps('summary')}
                        />
                        <Button
                            variant="gradient"
                            gradient={{ from: 'rgba(104, 152, 242, 1)', to: 'pink', deg: 196 }}
                            type='submit'
                            fullWidth
                            mt="xl"
                        >
                            Add new objective
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
      
      <Card className="flex-row w-full" shadow="sm" padding="lg" radius="md" withBorder >
                    <Card.Section style={{height: "20%"}}>
                        <div className='p-4'>
                            <Text className='flex justify-center text-lg mb-10'>Your Progress so Far</Text>
                            <Progress color="indigo" className='flex justify-center font-bold ml-4' style={{ width: "90%" }} value={25} />
                        </div>

                        <div className="flex justify-center pl-5">
                            Completion status: 1/4 <Badge className='ml-4' color='red' size='lg'>25%</Badge>
                        </div>
                    </Card.Section>

                    <Divider />
                    
                    <Card.Section style={{height: "73%"}}>
                        <div className='p-4'>
                            <Text className='flex justify-center text-lg'>Your Objectives so Far</Text>

                            <Checkbox.Group value={value} onChange={setValue}>
                            {
                                objectives.map((objective: any) => {
                                    return <Checkbox
                                        key={objective["objective"]}
                                        value={objective["objective"]}
                                        label={objective["objective"]}
                                        checked={true}
                                    />
                                })
                            }
                            </Checkbox.Group>
                        </div>
                    </Card.Section>

                    <Divider />

                    <Group className="justify-between" mt="md" mb="xs">
                     <Text fw={500}></Text>
                        {/* <Badge color="pink" variant="light">
                            Java
                        </Badge> */}
                    </Group>

                    <div className='flex flex-row text-center justify-center -mb-10'>
                        <Button size='md' variant="gradient" gradient={{ from: 'rgba(255, 0, 251, 1)', to: 'violet', deg: 139 }}
                            className='mr-20'
                            onClick={() => setShowForm(true)}>
                            Add new objective
                        </Button>
                        
                        <Button size='md' variant="gradient" gradient={{ from: 'rgba(255, 0, 251, 1)', to: 'violet', deg: 139 }}>
                            Finish skill
                        </Button>
                        
                    </div>
                    

                </Card> 
    </div>
}