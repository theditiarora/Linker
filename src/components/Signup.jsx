import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
//firebase
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../Firebase";
import { ErrorMsg } from "./ErrorMsg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [errorMsg, setErrorMsg] = useState(false);

  // sign up
  const handleSubmit = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      setErrorMsg(false)
      console.log(user);
    } 
    
    catch (error) {
      setErrorMsg(true);
    }

    navigate("/addLink");
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [user]);

  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between text-c-twenty">
        <h1>Sign up</h1>
        <h1 className="cursor-pointer" onClick={() => navigate("/")}>
          Linker
        </h1>
      </div>

      {errorMsg && <ErrorMsg />}

      <label className={`block text-c-eighteen ${errorMsg===true ? 'mt-4' : 'mt-12'} }`}>Email Address</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@gmail.com"
        className="input-field mt-3 w-2/4"
        type="text"
      />

      <label className="block text-c-eighteen mt-8">Password</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="······"
        className="input-field mt-3 w-2/4"
        type="password"
      />
      <button
        onClick={handleSubmit}
        className="block mt-8 py-2 px-12 text-white rounded-md bg-green hover:bg-opacity-70 transition-all duration-200"
      >
        Sign up
      </button>

      <p className="mt-8"> Already have an account?  <span onClick={() => navigate("/login")} className="text-green cursor-pointer"> Log in</span></p>

    </div>
  );
};

export default Signup;
