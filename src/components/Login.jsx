import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//firebase
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');

  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between text-c-twenty">
        <h1>Log in</h1>
        <h1 className="cursor-pointer" onClick={() => navigate("/")}>
          Linker
        </h1>
      </div>

      <label className="block text-c-eighteen mt-12">Email Address</label>
      <input
        onChange={e => setLoginEmail(e.target.value)}
        value={loginEmail}
        placeholder="example@gmail.com"
        className="input-field mt-3 w-2/4"
        type="text"
      />

      <label className="block text-c-eighteen mt-8">Password</label>
      <input
        onChange={e => setLoginPass(e.target.value)}
        value={loginPass}
        placeholder="······"
        className="input-field mt-3 w-2/4"
        type="password"
      />

      <button onClick={() => navigate("/addLink")} className="block mt-8 py-2 px-12 text-white rounded-md bg-blue hover:bg-opacity-70 transition-all duration-200" > Log in </button>

      <p className="mt-8"> Don&apos;t have an account? <span onClick={() => navigate("/signup")} className="text-blue cursor-pointer"> Sign up </span> </p>
    </div>
  );
};

export default Login;
