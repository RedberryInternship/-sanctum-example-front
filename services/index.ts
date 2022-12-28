import axios from "axios";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APP_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    withCredentials: true,
});


export const fetchCSRFToken = async () => {
    const response = await instance.get("/sanctum/csrf-cookie");
    return response;
}

export const getCharacters = async () => {
    const response = await instance.get("/api/characters");
    return response;
}

export const login = async (data: any) => {
    const response = await instance.post("/api/login", data);
    return response;
}

export const createCharacter = async (data: any) => {
    const response = await instance.post("/api/character", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return response;
}

export const me = async () => {
    const response = await instance.get("/api/me");
    return response;
}

export const logout = async () => {
    const response = await instance.get("/api/logout");
    return response;
}