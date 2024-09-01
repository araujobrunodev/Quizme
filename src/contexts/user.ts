import { createContext, useContext } from "react";

interface UserData {
    nickname: string,
    email: string,
    photo: string,
    setNickname: (w: string) => void,
    setEmail: (s: string) => void,
    setPhoto: (g: string) => void,
}

const CreateUserData = createContext({} as UserData)
const useUserData = () => useContext(CreateUserData)

export {CreateUserData, useUserData}