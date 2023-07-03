import React from 'react';
import InputWithLabel from '../shared/InputWithLabel';

const LoginPageInput = (props) => {
  const {mail,setMail,password,setPassword} = props
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail"
        type="text"
        placeholder="Enter email address"
      />
         <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
      />
    </>
  )
}

export default LoginPageInput