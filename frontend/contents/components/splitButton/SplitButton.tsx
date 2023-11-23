const itemsToConfig = ['Java', 'Python', 'C', 'C++', 'Rust', 'Javascript', 'Data Structures', 'Algorithms'];

import { Button, Menu, Group, ActionIcon, rem, useMantineTheme, UnstyledButton, Checkbox } from '@mantine/core';
import { IconTrash, IconBookmark, IconCalendar, IconChevronDown } from '@tabler/icons-react';
import classes from './SplitButton.module.css';
import { useEffect, useState } from 'react';

export function SplitButton(props: any) {
  const theme = useMantineTheme();

  //const [value, setValue] = useState<string[]>([]);

  const { value, setValue } = props;

  useEffect(() => {
    console.log(value);
  }, [value])

  return (
    <Button.Group className='mt-3 mb-2'>
      <Button className={classes.button}
      variant="gradient"
      gradient={{ from: 'grape', to: 'indigo', deg: 175 }}
      size='md'>Select the skills you want to improve</Button>
      <Menu transitionProps={{ transition: 'pop' }} position="right-start" withinPortal zIndex={10000} closeOnItemClick={false}>
        <Menu.Target variant="gradient"
          gradient={{ from: 'grape', to: 'indigo', deg: 175 }}>
          <ActionIcon 
            variant="filled"
            color={theme.primaryColor}
            size={42}
            className={classes.menuControl}
          >
            <IconChevronDown style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Checkbox.Group value={value} onChange={setValue}>
            {itemsToConfig.map((item : any) => {
                return <Menu.Item 
                  key={item}
                  id={item + "menu item"} 
                >
                    <Checkbox label={item} value={item} />
                </Menu.Item>
            })}
          </Checkbox.Group>
        </Menu.Dropdown>
      </Menu>
    </Button.Group>
  );
}