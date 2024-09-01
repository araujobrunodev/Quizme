import { GoogleLogin, useGoogleLogin } from "@react-oauth/google"
import { useUserData } from "../contexts/user"
import { useEffect, useState } from "react"
import "../styles/login.css"
import axios from "axios" 

const Login = function () {
    const [dataSuccess, setDataSuccess] = useState<any>()
    const user = useUserData()

    const getAccountData = useGoogleLogin({
      onSuccess: (data) => setDataSuccess(data),
      onError: (error) => console.log("failed login:",error)
    })
  
    useEffect(() => {
      if (dataSuccess != undefined) {
        console.log("dataSucess:",dataSuccess)
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
            console.log("user:",user)
          }).catch((res) => {
            console.log("falied to request:",res)
          })
      }
    },[dataSuccess])

    return (
        <div className="login">
            <p className="title_p">Entrar</p>

            <GoogleLogin size="large" onSuccess={(w) => console.log("its work.",getAccountData())} onError={() => console.log("não rolou")}/>
        </div>
    )
}

export default Login