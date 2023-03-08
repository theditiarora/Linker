import { useState } from "react";
import Link from "./components/Link";

function App() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [links, setLinks] = useState([]);

  const addNewLink = () => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newLink = {id, url, title };
    setLinks([...links, newLink]);
    setUrl("");
    setTitle("");
  };

  const deleteLink = id => {
    setLinks(links.filter(task => task.id !== id))
  }

  return (
    <div className="min-h-screen w-screen bg-[#1C1C1C] text-white px-10 py-7">
      <div className="flex justify-between text-c-twenty">
        <h1>Add a new link</h1>
        <h1>Linker </h1>
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
          <button onClick={addNewLink} className="bg-purple py-3 px-7 text-white ml-5 rounded-md whitespace-nowrap" >Save link
          </button>
        </div>
      </div>

      <h1 className="text-c-twenty mt-10">Saved Links</h1>

      {links.map((link) => (
        <Link onDelete={deleteLink} links={link} />
      ))}
    </div>
  );
}

export default App;
