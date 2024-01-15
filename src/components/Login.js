import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validation";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const [errorMsg, seterrorMsg] = useState(null);
  const [successMsg, setsuccessMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleButtonClick = () => {
    //Validate the From data;
    const msg = checkValidData(email?.current?.value, password?.current?.value,fullName?.current?.value);
    console.log("===?",
      email?.current?.value,
      password?.current?.value,
      fullName?.current?.value
    );
    seterrorMsg(msg);
    console.log("msg", !msg, !isSignInForm);

    if (!isSignInForm && !msg && !localStorage.getItem(email?.current?.value)) {
      let data = {
        email: email?.current?.value,
        password: password?.current?.value,
        fullName: fullName?.current?.value,
      };
      localStorage.setItem(email?.current?.value, JSON.stringify(data));
      console.log("localStorage", localStorage.getItem(email?.current?.value));
      
      dispatch(addUser({
        email : email?.current.value,
        password: password?.current?.value

      }))




      if (localStorage.getItem(email?.current?.value)) {
        setsuccessMsg("Registration successful");
        email.current.value = null;
        password.current.value = null;
        fullName.current.value = null;
        setIsSignInForm(!isSignInForm);
        setTimeout(() => {
          setsuccessMsg(null)
        }, 2000);
      }
    }
    if (
      password?.current?.value &&
      email?.current?.value &&
      localStorage.getItem(email?.current?.value)
    ) {
      let validdata = localStorage.getItem(email?.current?.value);
      // console.log(validdata?.email==email?.current?.value, validdata?.password==password?.current?.value)
      if(validdata?.email===email?.current?.value && validdata?.password===password?.current?.value){
        setsuccessMsg("login successful");
        email.current.value = null;
        password.current.value = null;
        fullName.current.value = null;
        setIsSignInForm(!isSignInForm);
        setTimeout(() => {
          setsuccessMsg(null)
        }, 2000);
      }
      console.log("validdata", validdata);
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 text-white bg-black mt-36 mx-auto right-0 left-0 rounded bg-opacity-80"
      >
        <h1 className="font-bold text-white text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            name=""
            ref={fullName}
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-600"
          />
        )}
        <input
          type="text"
          name=""
          ref={email}
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-600 "
        />
        <input
          ref={password}
          type="password"
          name=""
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <p className="text-red-500 font-bold text-lg py-2"> {errorMsg}</p>
        <p className="text-green-500 font-bold text-lg py-2"> {successMsg}</p>
        <button
          type="submit"
          className="p-4 my-4 bg-red-700 w-full rounded"
          name=""
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now."
            : "Already Registered Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
