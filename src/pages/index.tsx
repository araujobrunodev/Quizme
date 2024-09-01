import Topbar from "../components/topbar"
import { FC, ReactElement } from "react"
import Login from "../components/login"
import "../styles/index.css"
import { useLoginPermission } from "../contexts/loginPermission"

interface MainLayoutProps {
    childrens: ReactElement | ReactElement[],
    searchBar: boolean,
    logo: boolean,
    accountOrBackToHome: boolean
}

const MainLayout:FC<MainLayoutProps> = ({
    childrens,
    accountOrBackToHome,
    logo,
    searchBar
}) => {
    const loginPermission = useLoginPermission()

    return (<div className="page">
        <Topbar accountOrBacktoHome={accountOrBackToHome} logo={logo} searchBar={searchBar}/>
        
        <div className="main_context">
            {childrens}
        </div>

        <Login hidden={loginPermission.state}/>
    </div>)
}

export default MainLayout