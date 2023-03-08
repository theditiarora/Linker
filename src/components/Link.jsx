import React from "react";
import { LinkSimple, CaretDown, Trash } from "@phosphor-icons/react";
import { useState } from "react";

const Link = ({ links, onDelete }) => {
  const [toggle, setToggle] = useState(false);

  const colors = ['#915DFF', '#14B888', '#5DA7FF', '#B5E6BA', '#FC9400', '#FEAFFF']
  const item = colors[Math.floor(Math.random() * colors.length)];
  const handleToggle = () => setToggle(!toggle);

  return (
    <div className="flex justify-between items-start w-2/3  bg-grey p-5 mt-5 rounded-md ">
      <div className="flex gap-3 ">
        <LinkSimple size={22} color="#ffffff" weight="regular" />

        <div>
          <a target="_blank" href={links.url}> {links.title} </a>

          <a className={`mt-3 text-${item} ${toggle ? `block` : `hidden`}`} href={links.url}>{links.url}</a>
        </div>
      </div>

      <div className="flex gap-3">
        <CaretDown
            onClick={handleToggle}
            className="flex-shrink-0 cursor-pointe hover:bg-opacity-80 px-2 py-1 transition-all duration-200 rounded-md hover:bg-blue cursor-pointer"
            size={36}
            color="#ffffff"
            weight="bold"
        />

        <Trash 
            className="flex-shrink-0 cursor-pointe hover:bg-opacity-80 px-2 py-1 transition-all duration-200 rounded-md hover:bg-green cursor-pointer" 
            size={36} 
            color="#ffffff" 
            weight="bold"
            onClick={() => onDelete(links.id)}
        />
      </div>
    </div>
  );
};

export default Link;
