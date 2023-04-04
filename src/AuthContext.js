import { createContext, useState, useContext } from "react";
import userImg from "./user.png";

const UserContext = createContext();

export const useAuth = () => {return useContext(UserContext)}

export const AuthProvider = ({children}) => {
  const [signedin, setSignedin] = useState(false);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState('lol'); // current user
  const [data, setData] = useState([]); // firestore db
  const [userimg, setUserImg] = useState(userImg); //the default photo + the selected photo
  
  const value = {
      signedin, setSignedin,
      email, setEmail,
      user, setUser,
      data, setData,
      userimg, setUserImg
  };

  return (
  <UserContext.Provider value={value}>
    {children}
  </UserContext.Provider>
  );
};
