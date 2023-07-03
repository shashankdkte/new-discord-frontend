import React from 'react'
import CustomPrimaryButton from '../shared/CustomPrimaryButton'
import {useNavigate} from "react-router-dom"
import RedirectInfo from '../shared/RedirectInfo';
const LoginPageFooter = (props) => {
  const { isFormValid, handleLogin } = props;
  const navigate = useNavigate();

  const handlePushToRegisterPage = () => {
    navigate("/register")
  }
  return (
    <div>
      <CustomPrimaryButton
        label="Log In"
        additionalStyles={{ marginTop: "30px" }}
        disabled={!isFormValid}
        onClick={handleLogin}
      />
      <RedirectInfo
        text="Need an account? "
        redirectText="Create an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage}
      ></RedirectInfo>
    </div>
  )
}

export default LoginPageFooter