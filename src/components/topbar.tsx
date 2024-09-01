import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/topbar.css"
import { useLoginPermission } from "../contexts/loginPermission";
import { useUserData } from "../contexts/user";

interface TopbarProps {
    logo: boolean,
    searchBar: boolean,
    accountOrBacktoHome: boolean
}

const Topbar:FC<TopbarProps> = function (props) {
    const sources = ["accountIcon.svg","leavePage.svg"]
    const loginPermission = useLoginPermission()
    const [source, setSource] = useState("")
    const [page, setPage] = useState("")
    const user = useUserData()

    useEffect(() => {
        if (props.accountOrBacktoHome) {
            setSource(sources[0])

            if (user.email != "" &&
                user.nickname != "" &&
                user.photo != ""
            ) setPage("/account")
        } else {
            setSource(sources[1])
            setPage("/")
            
        } 
    },[props.accountOrBacktoHome, user])

    return (
        <div className="topbar">
            <p className="title_of_topbar" hidden={!props.logo}>Quizme</p>
        
            <input className="search_bar" type="search" hidden={!props.searchBar} placeholder="Search some quiz"/>

            <Link onClick={() => {
                if (user.email == "" &&
                    user.nickname == "" && 
                    user.photo == ""
                ) loginPermission.setState(true)
            }} 
            className="icons_button" to={page}>
                <img src={source}
                className="icons"
                alt="" />
            </Link>
        </div>
    )
}

export default Topbar