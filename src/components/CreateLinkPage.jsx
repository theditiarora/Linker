import { useEffect, useState } from "react";
import Link from "./Link";
import { useNavigate } from 'react-router-dom';
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from '../Firebase';
import { useAuth } from "../AuthContext";

const CreateLinkPage = () => {
  const navigate = useNavigate()
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [links, setLinks] = useState([]);

  const {user, data, setData} = useAuth()

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, "user", user.uid);
  
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
       setData(docSnap.data().link)

       if(docSnap.data().link.length === 0) {
        console.log("lenght is 0 man");
       }
      } 
      else {
        console.log("No such document!");
      }
    }
    getData()
  }, [])

  const addNewLink = () => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newLink = {id, url, title };
    setLinks([...links, newLink]);
    setUrl("");
    setTitle("")
  };

  useEffect(() => {
    const addDoc = async (du) => {
      console.log(links)
      try {
        await setDoc(doc(db, "user", du), {
          link: links,
        });
        console.log("Document written with ID: ", du);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };

    addDoc(user.uid)
  }, [links, user.uid])

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

      {/* <button onClick={getData} className="bg-blue p-5">hi</button> */}

      <h1 className="text-c-twenty mt-10">Saved Links</h1>

      {links.map((link) => (
        <Link onDelete={deleteLink} links={link} />
      ))}
    </div>
  )
}

export default CreateLinkPage