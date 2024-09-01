import { GoogleLogin, useGoogleLogin } from "@react-oauth/google"
import { useLoginPermission } from "../contexts/loginPermission"
import { FC, useEffect, useState } from "react"
import { useUserData } from "../contexts/user"
import "../styles/login.css"
import axios from "axios" 

interface LoginProps {
  hidden: boolean
}

const Login:FC<LoginProps> = function ({
  hidden
}) {
    const [dataSuccess, setDataSuccess] = useState<any>()
    const loginPermission = useLoginPermission()
    const user = useUserData()

    const getAccountData = useGoogleLogin({
      onSuccess: (data) => setDataSuccess(data),
      onError: (error) => console.log("failed login:",error)
    })
  
    useEffect(() => {
      if (dataSuccess != undefined) {
        axios.get("https://www.googleapis.com/oauth2/v1/userinfo?access_token="+dataSuccess.access_token, {
          headers: {
            Authorization: "Bearer "+dataSuccess.acess_token,
            Accept: "application/json"
          }
        }).then((res) => {
          const data = res.data
          
          user.setPhoto(data.picture)
          user.setNickname(data.name)
          user.setEmail(data.email)
          
          loginPermission.setState(false)
        }).catch((res) => {
          console.log("falied to request:",res)
        })
      }
    },[dataSuccess])

    return (
        <div className="login" hidden={!hidden}>
            <p className="title_p">Entrar</p>

            <GoogleLogin size="large" onSuccess={(w) => getAccountData()} onError={() => console.log("não rolou")}/>
        </div>
    )
}

export default Login