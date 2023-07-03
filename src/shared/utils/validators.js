
export const validateLoginForm = ({ mail, password }) => {
  const isEmailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);
  return isEmailValid && isPasswordValid;
};

const validateMail = (mail) => {
  const emailPattern = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
  return emailPattern.test(mail);
};

const validatePassword = (password) =>
  password.length > 5 && password.length < 13;
