import React from "react";
import DeleteModal from "./DeleteModal";
import { LinkSimple, CaretDown, TrashSimple, CopySimple } from "@phosphor-icons/react";
import { useState } from "react";

 const Link = ({ links, onDelete }) => {
  const [toggle, setToggle] = useState(false);
  const [modal, setModal] = useState(false)

  const handleClick = () => {
    setModal(true)
  }

  const handleToggle = () => setToggle(!toggle);

  return (
    <div className="flex justify-between items-start w-2/3  bg-grey p-5 mt-5 rounded-md ">
      <div className="flex gap-3 ">
        <LinkSimple size={22} color="#ffffff" weight="regular" />

        <div>
          <a target="_blank" href={links.url}> {links.title} </a>

          <a className={`mt-3 text-light-green ${toggle ? `block` : `hidden`}`} href={links.url}>{links.url}</a>
        </div>
      </div>

      <div className="flex gap-3">
        <CaretDown
            onClick={handleToggle}
            className={`flex-shrink-0 cursor-pointe px-2 py-1 transition-all duration-200 rounded-md hover:bg-white hover:bg-opacity-30 cursor-pointer ${toggle && `rotate-180`}`}
            size={36}
            color="#ffffff"
            weight="bold"
        />

        <TrashSimple 
            className="flex-shrink-0 cursor-pointe px-2 py-1 transition-all duration-200 rounded-md hover:bg-white hover:bg-opacity-30 cursor-pointer" 
            size={36} 
            color="#ffffff" 
            weight="bold"
            onClick= {handleClick}
        />

        <CopySimple 
          className="flex-shrink-0 cursor-pointe px-2 py-1 transition-all duration-200 rounded-md hover:bg-white hover:bg-opacity-30 cursor-pointer" 
          size={36} 
          color="#ffffff" 
          weight="bold"
          onClick={() => {navigator.clipboard.writeText(links.url)}}
        />

      </div>
      { modal && <DeleteModal setModal={setModal} links={links} onDelete={onDelete} /> }
    </div>
  );
};

export default Link

