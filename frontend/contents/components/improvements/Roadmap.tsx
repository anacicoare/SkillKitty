import { Card, Image, Text, Badge, Button, Group, Divider } from '@mantine/core';
import axios from 'axios';
import { useState } from 'react';

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

export default function Roadmap() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const [suggestedObjective, setSuggestedObjective] = useState("");

    const suggestNewObjective = () => {
        axios.post('https://api.openai.com/v1/chat/completions', {
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                "role": "user",
                "content": "Suggest me an action to take in order to improve my skills as a python developer. (Maximum 10 words)"
                }
            ],
            "temperature": 1,
            "max_tokens": 256,
            "top_p": 1,
            "frequency_penalty": 0,
            "presence_penalty": 0
        }, {
            headers: {
                "Authorization": "Bearer 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",
                "Content-Type": "application/json"
           }
        }).then((response: any) => {
            console.log(response?.data["choices"][0]["message"]["content"]);
            setSuggestedObjective(response?.data["choices"][0]["message"]["content"]);
        }).catch((err: any) => {
            console.log(err);
        })
    }

    return <div className="flex float-left h-full p-0 justify-center" style={{width:'66%'}}>
        <Card className="flex-row w-full justify-center" shadow="sm" padding="lg" radius="md" withBorder >
            <div className="grid grid-cols-4 gap-4 w-3/4 h-3/4 mx-auto mt-6 -mb-2">
                {numbers.map((number) => {
                    return <div key={number} style={{width:"20%", height:"20%"}}>   <Image
                    src="https://www.fidgetstickers.com/cdn/shop/products/Cat3_800x.png?v=1673253677"
                    style={{ width: 75, height: 75, filter: 'grayscale(100%)' }}
                    alt="Coding" />
                    </div>;
                })}
            </div>
            <Divider>
                
            </Divider>

            <div className='flex flex-row'>
            <Image className='mt-2 ml-1'
            src="/pisutelefon-01.png"
            style={{ width: 155, height: 155}}
            alt="Coding" />
            <Card className='ml-5 mt-3 flex w-1/2 bg-slate-100' shadow='md'>
                    {suggestedObjective}
                    <Button className='flex align-middle' variant="gradient"
                        gradient={{ from: 'rgba(255, 0, 251, 1)', to: 'violet', deg: 139 }}
                        onClick={ () => {
                             axios.post('/api/steps/post', {
                                "email": localStorage["email"],
                                "skill": window.location.href.substring(10, window.location.href.indexOf("/improvement")),
                                "step": suggestedObjective
                             }).then(() => {
                                console.log("success")
                            }).catch((err) => {console.log(err)})
                        }
                        }
                    >Add objective</Button>
            </Card>
            </div>
            <Button size='md' variant="gradient" gradient={{ from: 'rgba(255, 0, 251, 1)', to: 'violet', deg: 139 }}
                style={{ width: "175px", height: "30px" }}
                onClick={() => {suggestNewObjective()}}
            >
                Suggest objective
            </Button>
        </Card> 
    </div>;
}