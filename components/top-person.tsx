import React from "react";

type Props = {};

const TopPerson = (props: Props) => {
  return (
    <div className="w-full border rounded-lg flex items-center gap-4 p-2">
      <div className="w-10 h-10 p-1 ">
        <img
          className="bg-white rounded-full"
          src="https://api.dicebear.com/7.x/notionists/svg?seed=Smokey"
        />
      </div>
      <div>Navindu Amarakoon</div>
    </div>
  );
};

export default TopPerson;
