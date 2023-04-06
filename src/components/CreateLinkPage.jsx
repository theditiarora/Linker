import { useState } from "react";
import Link from "./Link";
import { useNavigate } from 'react-router-dom';
import { setDoc, doc } from "firebase/firestore";
import { db } from '../Firebase';
import { useAuth } from "../AuthContext";

const CreateLinkPage = () => {
  const navigate = useNavigate()
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [links, setLinks] = useState([]);

  const {user} = useAuth()

  const addDoc = async (du) => {
    try {
      await setDoc(doc(db, "user", du), {
        link: links,
      });
      console.log("Document written with ID: ", du);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const addNewLink = () => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newLink = {id, url, title };
    setLinks([...links, newLink]);
    addDoc(user.uid)
    setUrl("");
    setTitle("")
  };

  const deleteLink = id => {
    setLinks(links.filter(task => task.id !== id))
  }
  
  return (
    <div>
      <div className="flex justify-between text-c-twenty">
        <h1>Add a new link</h1>
        <h1 className='cursor-pointer' onClick={() => navigate('/')}>Linker </h1>
      </div>

      <div className="w-2/3 ">
        <input
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          placeholder="Add link  http://"
          className="input-field w-full"
          type="text"
        />

        <div className="flex justify-between items-center mt-5 ">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Add a title"
            className="input-field mt-0 w-full"
            type="text"
          />
          <button onClick={addNewLink} className="bg-green hover:bg-opacity-70 duration-200 py-3 px-7 text-white ml-5 rounded-md whitespace-nowrap" >Save link </button>
        </div>
      </div>

      <h1 className="text-c-twenty mt-10">Saved Links</h1>

      {links.map((link) => (
        <Link onDelete={deleteLink} links={link} />
      ))}
    </div>
  )
}

export default CreateLinkPage