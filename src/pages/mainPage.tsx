import { Link } from "react-router-dom"
import "../styles/mainPage.css"
import { useEffect, useState } from "react"
import { useUserData } from "../contexts/user"
import { useLoginPermission } from "../contexts/loginPermission"

const MainPage = function () {
    const loginPermission = useLoginPermission()
    const [page, setPage] = useState("") 
    const user = useUserData()

    const verifyLogin = () => {
        if (user.email == "" &&
            user.nickname == "" &&
            user.photo == ""
        ) loginPermission.setState(true)
    }

    useEffect(() => {
        if (user.email != "" &&
            user.nickname != "" &&
            user.photo != ""
        ) setPage("/makeaquiz")
    },[user])

    return (
        <>
            <div className="middle">
                <Link onClick={verifyLogin} to={page} className="middle_button">
                    <button className="filters_button">Criar</button>
                </Link>
            </div>

            <div className="list_of_quizes">
                {}
            </div>
        </>
    )
}

export default MainPage