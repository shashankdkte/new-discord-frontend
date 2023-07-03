import React, { useEffect, useState } from 'react'
import AuthBox from '../shared/authBox'
import { Typography } from '@mui/material';
import RegisterPageInput from './RegisterPageInput';
import RegisterPageFooter from './RegisterPageFooter';
import { validateRegisterForm } from '../shared/utils/validators';
import { connect } from "react-redux";
import { getActions } from '../store/actions/authActions';
import { useNavigate } from 'react-router-dom'

const RegisterPage = ({register}) => {

   const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
  setIsFormValid(validateRegisterForm({mail,username,password}))
},[mail,username,password])
  const handleRegister = () => {
    console.log(mail, password, username)
        const userDetails = {
      mail,
      password,
      username,
    };

    register(userDetails, navigate);
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


const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(RegisterPage);