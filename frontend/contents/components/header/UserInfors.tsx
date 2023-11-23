import { ProfileContext } from '@/contexts/ProfileContext'
import { Avatar, Menu } from '@mantine/core';
import { IconLogout, IconUserCheck } from '@tabler/icons-react';
import React, { useContext } from 'react'

export default function UserInfors(props: any) {
    const { infor } = props;
    const { authorized, logout } = useContext(ProfileContext)
    return (

        <Menu shadow="md" width={200}>
            <Menu.Target>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <strong className='capitalize text-gray-600'>{infor?.fullname}</strong>
                    <Avatar color="cyan" radius="xl"><span className='uppercase'>{infor?.fullname.substring(0, 1)}</span></Avatar>
                </div>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Profile</Menu.Label>
                <Menu.Item icon={<IconUserCheck size={14} />}>User Profile</Menu.Item>
                <Menu.Divider />
                <Menu.Label>Danger zone</Menu.Label>
                <Menu.Item color="red" icon={<IconLogout size={14} />} onClick={() => logout()}>Logout</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}
