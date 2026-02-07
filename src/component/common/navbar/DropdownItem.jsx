import React, { useState } from "react";

const DropdownItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="relative">
      <div
        className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex justify-between"
        onClick={() => setOpen(!open)}
      >
        {item.title}
        {item.children && <span>▶</span>}
      </div>

      {item.children && open && (
        <ul className="absolute left-full top-0 bg-white shadow-md min-w-[150px]">
          {item.children.map((child, index) => (
            <DropdownItem key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default DropdownItem;
