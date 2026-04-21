import Api from "@/apiClient/apiclient";

export interface logindata{
    email:string,
    password:string

}


export const login = async(data:logindata)=>{
    const response = await Api.post('/auth/login',data)
    return response.data
}


export interface register{
    name:string,
    phone_number:string,
    email:string,
    password:string,
    blood_type:string,
    address:string
}

export const RegisterUser = async(data:register)=>{
    const response = await Api.post(`/auth/register`,data)

    return response.data

}


export interface forgot_password{
    email:string,
    password:string
}

export const forgotPassword = async(data:forgot_password)=>{
    const response = await Api.post('/auth/forgot_password',data)
    return response.data
}