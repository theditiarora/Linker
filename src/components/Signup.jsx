import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userImg from "../user.png";
//firebase
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { storage } from "../Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth } from "../Firebase";
import { ErrorMsg } from "./ErrorMsg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [errorMsg, setErrorMsg] = useState(false);
  const [userimg, setUserImg] = useState(userImg);

  const navigate = useNavigate();
  let fileInput = useRef();

  // sign up
  const handleSubmit = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      setErrorMsg(false);
      console.log(user);
    } catch (error) {
      setErrorMsg(true);
    }

    navigate("/addLink");
  };

  //when a sign up is triggered
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [user]);

  // uploading image to firebase
  
  const uploadImg = (inp) => {
    if (inp == null) return console.log("null");
    
    const imageRef = ref(storage, `images/${email}`);
    uploadBytes(imageRef, inp).then(() => {
      alert("img sent")
    })
    .then(() => {
      // Get the download URL
      const starsRef = ref(storage, `images/${email}`);
      getDownloadURL(starsRef)
      .then((url) => {
       setUserImg(url);
      })
    })
  };

  return (
    <div>
      <div className="flex justify-between text-c-twenty">
        <h1>Sign up</h1>
        <h1 className="cursor-pointer" onClick={() => navigate("/")}> Linker</h1>
      </div>

      {errorMsg && <ErrorMsg />}

      <label className={`block text-c-eighteen ${ errorMsg === true ? "mt-4" : "mt-12"} }`}> Email Address</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@gmail.com"
        className="input-field mt-3 w-2/4"
        type="email"
        // pattern={`^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$`}
        // title="Please enter a valid email"
      />

      <label className="block text-c-eighteen mt-8">Password</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="······"
        className="input-field mt-3 w-2/4"
        type="password"
      />

      <br />
      <label className="mt-8 block">Add a Photo</label>

      <img
        onClick={() => fileInput.current.click()}
        className={`cursor-pointer h-20 w-20 mt-4 transition-all duration-200 hover:opacity-70 rounded-full object-cover`}
        src={userimg}
        alt="profieImage"
      />

      <input
        onChange={ e => {
          if (e.target.files[0]) {
            uploadImg(e.target.files[0])
        }}}
        className="invisible"
        ref={fileInput}
        type="file"
        accept="image/*"
      />

      <button onClick={handleSubmit} className="block mt-4 py-2 px-12 text-white rounded-md bg-green hover:bg-opacity-70 transition-all duration-200"> Sign up </button>

      <p className="mt-8"> Already have an account? <span onClick={() => navigate("/login")} className="text-green cursor-pointer">Log in </span> </p>

    </div>
  );
};

export default Signup;