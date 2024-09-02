import { createContext, useContext } from "react";

interface LoginPermission {
    state: boolean,
    setState: (h: boolean) => void
}

const CreateLoginPermission = createContext({} as LoginPermission)
const useLoginPermission = () => useContext(CreateLoginPermission)

export {CreateLoginPermission, useLoginPermission}
