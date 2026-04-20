import axios from "axios";

const Api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})

Api.interceptors.request.use((config) => {
    if (typeof window !== "undefined") {
        console.log(typeof window)
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
})


Api.interceptors.response.use((response) => response, (error) => {
    if (!error.response) {
        return Promise.reject({ message: "please check your internet" })
    }

    if (error.response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }


    return Promise.reject({
        message:
            error.response?.data?.message || "Something went wrong",
    });
})


export default Api;