import {
    TextInput,
    PasswordInput,
    Paper,
    Title,
    Text,
    Container,
    Button,
    Divider,
    Box
} from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from '@mantine/form';
import { useContext } from 'react';
import { ProfileContext } from '@/contexts/ProfileContext';
import { useRouter } from 'next/router';

/**
 * Login page
 * Use mantine form to validate
 */
export default function LoginPage() {
    const { login } = useContext(ProfileContext)
    const route = useRouter();

    const form = useForm({
        initialValues: { email: '', password: '' },

        // functions will be used to validate values at corresponding key
        validate: {
            email: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            password: (value) => {
                if (!value) {
                    return 'Password is required';
                }
                if (value.length > 100) {
                    return 'Password must be less than 100 characters';
                }
                return null;
            },
        },
    });

    const handleSubmit = (values: any) => {
        login({ email: values?.email, password: values?.password })
    }

    return (
        <Box h={'100vh'} w={'100vw'} pos={'fixed'} className='top-1/4 bg-no-repeat bg-cover bg-gradient-to-b from-blue-500 to-cyan-400'>
            <Container size={420} my={40}>
                <Paper withBorder shadow="md" p={20} mt={30} radius="md">
                
                <Image className="flex justify-center mx-auto -mb-5"
                src='/../public/CATGOOD01.png'
                width={150}
                height={150}
                alt="SkillKitty"
                />
                <Title
                    mb={20}
                    align="center"
                    sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
                >
                    Welcome to<br /> SkillKitty!
                </Title>
                    {/* Internal login*/}
                    {process.env.NEXT_PUBLIC_ALLOW_INTERNAL_LOGIN === 'true' &&
                        <form noValidate onSubmit={form.onSubmit(handleSubmit)}>
                            <TextInput
                                autoFocus
                                autoComplete='on'
                                name='email'
                                label="Email"
                                placeholder="example@domain.com"
                                required {...form.getInputProps('email')}
                            />
                            <PasswordInput
                                label="Password"
                                autoComplete='on'
                                name='password'
                                placeholder="Enter password"
                                required {...form.getInputProps('password')}
                                mt="md" />
                            <Button  variant="gradient" gradient={{ from: 'rgba(104, 152, 242, 1)', to: 'pink', deg: 196 }} type='submit' fullWidth mt="xl">
                                Login
                            </Button>
                            <Link href={'/register'}>
                                <Text className="-mb-3" size="sm" align="center" mt="md" variant="link">Don't have an account? Register now!</Text>
                            </Link>
                            <Link href={'/start/dashboard'}>
                                <Text size="sm" align="center" mt="md" variant="link">Go back to the home page.</Text>
                            </Link>
                        </form>}             
                </Paper>
            </Container>
        </Box>
    );
}
