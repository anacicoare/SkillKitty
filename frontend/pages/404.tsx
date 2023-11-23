import React from 'react'
import notFoundStyle from "@/styles/404.module.scss"
import Link from 'next/link'
import { Button } from '@mantine/core'

export default function NotFoundPage() {
    return (
        <>
            <div className={notFoundStyle.not_found_wrap}>
                <div>
                    <div>
                        <h3 className={notFoundStyle.title_one}>Oops! Page not found</h3>
                        <h1 className={notFoundStyle.number}><span>4</span><span>0</span><span>4</span></h1>
                    </div>
                    <h2 className={notFoundStyle.title_two}>we are sorry, but the page you requested was not found</h2>
                    <Link href={`/start/dashboard`}><Button variant={'gradient'}>Back to home page</Button></Link>
                </div>
            </div>
        </>
    )
}
