export enum Screens {
  Authentication = 'Authentication',
  Authenticate = 'Authenticate',
  Login = 'Login',
  ResetPassword = 'ResetPassword',
  ResetPasswordSuccess = 'ResetPasswordSuccess',
}

export const validateEmail = (validateEmail: any) => {
  // const emailRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(validateEmail);
};
// Kiểm tra mật khẩu trong React Native và đảm bảo rằng nó phải chứa ít nhất 6 kí tự, bao gồm chữ cái, chữ số và kí tự đặc biệt
export const validatePassword = (password: any) => {
  // const emailRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\W_]).{6,}$/;

  return passwordRegex.test(password);
};
