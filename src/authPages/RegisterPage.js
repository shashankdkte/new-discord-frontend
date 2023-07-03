import React, { useEffect, useState } from 'react'
import AuthBox from '../shared/authBox'
import { Typography } from '@mui/material';
import RegisterPageInput from './RegisterPageInput';
import RegisterPageFooter from './RegisterPageFooter';
import { validateRegisterForm } from '../shared/utils/validators';
const RegisterPage = () => {

   const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
  setIsFormValid(validateRegisterForm({mail,username,password}))
},[mail,username,password])
  const handleRegister = () => {
    console.log(mail,password,username)
  }


  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white " }}>
        Create an account
      </Typography>
      <RegisterPageInput
        mail={mail}
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <RegisterPageFooter  handleRegister={handleRegister} isFormValid={isFormValid}/>
    </AuthBox>
  )
}

export default RegisterPage