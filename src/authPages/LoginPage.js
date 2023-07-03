import React, { useEffect, useState } from 'react'
import AuthBox from '../shared/authBox'
import LoginPageHeader from './LoginPageHeader'
import LoginPageInput from './LoginPageInput'
import LoginPageFooter from './LoginPageFooter'
import { validateLoginForm } from '../shared/utils/validators'
import { connect } from "react-redux";
import { getActions } from '../store/actions/authActions';
import { useNavigate } from 'react-router-dom'
const LoginPage = ({login}) => {
  const [mail,setMail] = useState("")
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
  setIsFormValid(validateLoginForm({mail,password}))
},[mail,password,setIsFormValid])


  const handleLogin = () => {
    console.log(mail,password);
    const userDetails = { mail, password };
    login(userDetails,navigate)
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

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  }
}

export default connect(null, mapActionsToProps)(LoginPage);

