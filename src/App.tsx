import { CreateLoginPermission } from "./contexts/loginPermission"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { RouterProvider } from "react-router-dom"
import { CreateUserData } from "./contexts/user"
import { useState } from "react"
import router from "./router"

function App() {
  let [nick, setNick] = useState("")
  let [email, setEmail] = useState("")
  let [photo, setPhoto] = useState("")
  let [loginPermission, setLoginPermission] = useState(false)

  return (
    <CreateUserData.Provider value={{
      email: email,
      nickname: nick,
      photo: photo,
      setEmail: setEmail,
      setNickname: setNick,
      setPhoto: setPhoto

    }} children={
      <CreateLoginPermission.Provider 
      value={{
        state: loginPermission,
        setState: setLoginPermission
      }} 
      children={
        <GoogleOAuthProvider clientId="656529349981-n4276c4qm3fqquubrrju327n50h4i2vv.apps.googleusercontent.com">
          <RouterProvider router={router}/>
        </GoogleOAuthProvider>
      }/>
    }/>
  )
}

export default App
