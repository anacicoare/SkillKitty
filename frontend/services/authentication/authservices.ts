import axiosInstance from "../axiosInstance";

export const AuthServices = {
    //Get project members
    callApiLogin: (data: any) => {
        
        return axiosInstance.post("users/login", data);
    },

    callApiRegister: (data: any) => {
        localStorage["email"] = data?.email;
        localStorage["name"] = data?.name;
        localStorage["surname"] = data?.surname;
        localStorage["points"] = 0;
        localStorage["isAuthenticated"] = true;

        return axiosInstance.post("users/register", data).then(() => {
            window.location.href = 'http://localhost:3000/start/dashboard'
        });

        
    },
};
