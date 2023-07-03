import React from 'react'
import CustomPrimaryButton from '../shared/CustomPrimaryButton'

const LoginPageFooter = (props) => {
  const{isFormValid,handleLogin} = props
  return (
    <div>
      <CustomPrimaryButton
        label="Log In"
        additionalStyles={{ marginTop: "30px" }}
        disabled={!isFormValid}
        onClick={handleLogin}
      />
    </div>
  )
}

export default LoginPageFooter