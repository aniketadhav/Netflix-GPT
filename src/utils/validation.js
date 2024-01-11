export const checkValidData = (email, password, fullName) => {
  const isEmailValid = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,}$/i.test(email);
  const isPasswordValid =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(fullName);
  const isFullName =/^\S.*$/.test(password);

  if(!isFullName) return "Full Name is not valid";
  if(!isEmailValid) return "Email ID is not valid";
  if(!isPasswordValid) return "Password ID is not valid";
  return null;
};


