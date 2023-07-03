import React, { useState } from 'react'
import AuthBox from '../shared/authBox'
import LoginPageHeader from './LoginPageHeader'
import LoginPageInput from './LoginPageInput'
import LoginPageFooter from './LoginPageFooter'

const LoginPage = () => {
  const [mail,setMail] = useState("")
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const handleLogin = () => {
    console.log("log")
  }
  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInput
        mail={mail}
      setMail = {setMail}
      password = {password}
      setPassword = {setPassword}
      />
      <LoginPageFooter  isFormValid={isFormValid} handleLogin={handleLogin}/>
    </AuthBox>
  )
}

export default LoginPage