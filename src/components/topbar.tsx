import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/topbar.css"

interface TopbarProps {
    logo: boolean,
    searchBar: boolean,
    accountOrBacktoHome: boolean
}

const Topbar:FC<TopbarProps> = function (props) {
    const sources = ["accountIcon.svg","leavePage.svg"]
    const [source, setSource] = useState("")
    const [page, setPage] = useState("")

    useEffect(() => {
        if (props.accountOrBacktoHome) {
            setSource(sources[0])
            setPage("account")
        } else {
            setSource(sources[1])
            setPage("/")
        } 
    },[props.accountOrBacktoHome])

    return (
        <div className="topbar">
            <p className="title_of_topbar" hidden={!props.logo}>Quizme</p>
        
            <input className="search_bar" type="search" hidden={!props.searchBar} placeholder="Search some quiz"/>

            <Link className="icons_button" to={page}>
                <img src={source}
                className="icons"
                alt="" />
            </Link>
        </div>
    )
}

export default Topbar