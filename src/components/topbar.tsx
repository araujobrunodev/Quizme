import { FC, useEffect } from "react";

interface TopbarProps {
    logo: boolean,
    searchBar: boolean,
    accountOrBacktoHome: boolean
}

const Topbar:FC<TopbarProps> = function (props) {
    const sources = ["accountIcon.svg","leavePage.svg"]

    useEffect(() => {
        const {accountOrBacktoHome, logo, searchBar} = props
        
        if (!accountOrBacktoHome && !logo && !searchBar) {
            console.log("remover tudo menos o leavePage, e jogar pro canto esquerdo")
        }
    },[props.accountOrBacktoHome, props.logo, props.searchBar])

    return (
        <div className="topbar">
            <p className="title_of_topbar" hidden={!props.logo}>Quizme</p>
        
            <input type="search" hidden={!props.searchBar} placeholder="Search some quiz"/>
        
            <img src={
                props.accountOrBacktoHome ?
                sources[0] :
                sources[1]
            } alt="" />
        </div>
    )
}

export default Topbar