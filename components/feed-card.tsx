import React from "react";

type Props = {};

const FeedCard = (props: Props) => {
  return (
    <div className="w-full border rounded-lg flex items-center gap-4 p-3">
      <div className="flex gap-2 text-lg">
        <span className="font-bold flex gap-2 ">
          <img
            className="w-6 h-6 bg-white rounded-full"
            src="https://api.dicebear.com/7.x/notionists/svg?seed=Smokey"
          />
          Some guy
        </span>{" "}
        slapped
        <span className="font-bold flex gap-2">
          <img
            className="w-6 h-6 bg-white rounded-full"
            src="https://api.dicebear.com/7.x/notionists/svg?seed=Smodkeyss"
          />
          Another Guy
        </span>{" "}
        55 times.
      </div>
    </div>
  );
};

export default FeedCard;
