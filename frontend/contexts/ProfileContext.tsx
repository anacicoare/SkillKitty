import { AuthServices } from '@/services/authentication/authservices';
import { createContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import Cookies from "js-cookie";
import { useRouter } from 'next/router';

type ProfileContextProps = {
    authorized: boolean;
    profile: any;
    violationData: any;
    login: (data: any) => void;
    register: (data: any) => void;
    logout: () => void;
};

export const ProfileContext = createContext<ProfileContextProps>({
    authorized: false,
    profile: {},
    violationData: null,
    login: () => { },
    register: () => { },
    logout: () => { },
});

export const ProfileProvider = ({ children }: any) => {
    const [authorized, setAuthorized] = useState(false);
    const [profile, setProfile] = useState({});
    const [violationData, setViolationData] = useState<any>(null);
    const router = useRouter()

    useEffect(() => {
        getUserProfile();
    }, [])

    /**
     * When load page, check cookies to see if user is logged in
     */
    const getUserProfile = () => {
        const accessToken: any = localStorage.getItem('isAuthenticated');
        //Case not authenticated
        if (!accessToken) {
            setAuthorized(false)
        } else {
            //Case have accessToken
            
            //Case logged in
            setAuthorized(true);
            setProfile({
                fullname: localStorage.getItem('surname')! + " " + localStorage.getItem('name')!,
                points: localStorage.getItem('points')!
            });
            
        }
    }

    const login = (data: any) => {
        // Call api login
        AuthServices.callApiLogin(data).then((response: any) => {
            console.log(data);
            if (response && response?.data) {
                const dataResponse = response?.data;
                //If the authentication succeeds, update the state with the user's profile
                setAuthorized(true);
                setProfile({
                    name: dataResponse?.name,
                    surname: dataResponse?.surname,
                });

                localStorage.setItem("name", dataResponse?.name);
                localStorage.setItem("surname", dataResponse?.surname);
                localStorage.setItem("email", dataResponse?.email);
                localStorage.setItem("points", dataResponse?.points);

                //Redirect to home (dashboard) page
                router.push(`/start/dashboard`)

            } else {
                console.log("login failed");
                setAuthorized(false);
            }
        }).catch((error: any) => {
            console.error(error);
        })

    };

    const register = (data: any) => {
         AuthServices.callApiRegister(data).then((response: any) => {
            console.log(data);
            if (response && response?.data) {
                //Redirect to home (dashboard) page
                router.push(`/start/dashboard`)

            } else {
                console.log("error register");
                setAuthorized(false);
            }
        }).catch((error: any) => {
            console.error(error);
        })
    }

    const logout = () => {
        //Set authorization false
        setAuthorized(false);
        setProfile({});
        //Remove accessToken and refreshToken from localStorage/Cookies
        localStorage.removeItem('accessToken');
        Cookies.remove('refreshToken');
        //Redirect to login page
        router.push(`/start/dashboard`)
    };
    
    return (
        <ProfileContext.Provider value={{ authorized, profile, login, register, logout, violationData}}>
            {children}
        </ProfileContext.Provider>
    );
};