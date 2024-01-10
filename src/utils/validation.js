const checkValidData = (email, password) => {
  const isEmailValid = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,}$/i.test(email);
  const isPasswordValid =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);

  if(!isEmailValid) return "Email ID is not valid";
  if(!isPasswordValid) return "password ID is not valid";
};
