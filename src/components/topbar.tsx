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

    useEffect(() => {
        const {accountOrBacktoHome, logo, searchBar} = props
        
        if (!accountOrBacktoHome && !logo && !searchBar) {
            console.log("remover tudo menos o leavePage, e jogar pro canto esquerdo")
        }
    },[props.accountOrBacktoHome, props.logo, props.searchBar])

    useEffect(() => {
        if (props.accountOrBacktoHome) {
            setSource(sources[0])
        } else {
            setSource(sources[1])
        } 
    },[props.accountOrBacktoHome])

    return (
        <div className="topbar">
            <p className="title_of_topbar" hidden={!props.logo}>Quizme</p>
        
            <input className="search_bar" type="search" hidden={!props.searchBar} placeholder="Search some quiz"/>

            {/* link to send client to other page */}

            {/* <Link to={"/"}> */}
                <img src={source}
                className="icons"
                alt="" />
            {/* </Link> */}
        </div>
    )
}

export default Topbar