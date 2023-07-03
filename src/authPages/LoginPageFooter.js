import React from 'react'
import CustomPrimaryButton from '../shared/CustomPrimaryButton'
import {useNavigate} from "react-router-dom"
import RedirectInfo from '../shared/RedirectInfo';
import {
  Tooltip
} from '@mui/material';
const LoginPageFooter = (props) => {
  const { isFormValid, handleLogin } = props;
  const navigate = useNavigate();

  const handlePushToRegisterPage = () => {
    navigate("/register")
  }
  const getFormNotValidMessage = () => {
  return "Enter correct email address and password";
};
const getFormValidMessage = () => {
  return "Press to Log In";
};
  return (
    <>
      <Tooltip title={!isFormValid ? getFormNotValidMessage():getFormValidMessage()}>

    <div>
      <CustomPrimaryButton
        label="Log In"
        additionalStyles={{ marginTop: "30px" }}
        disabled={!isFormValid}
        onClick={handleLogin}
        />
        </div>
        </Tooltip>
      <RedirectInfo
        text="Need an account? "
        redirectText="Create an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage}
        ></RedirectInfo>
        </>
  )
}

export default LoginPageFooter