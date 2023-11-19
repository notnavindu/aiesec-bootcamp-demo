import { Slap } from "@/lib/types/Slap";
import React from "react";

type Props = {
  slap: Slap;
};

const FeedCard = (props: Props) => {
  return (
    <div className="w-full border rounded-lg flex items-center gap-4 p-3">
      <div className="flex gap-2 text-lg">
        <span className="font-bold flex gap-2 ">
          <img
            className="w-6 h-6 bg-white rounded-full"
            src={props.slap.slapper.image}
          />
          {props.slap.slapper.name}
        </span>{" "}
        slapped
        <span className="font-bold flex gap-2">
          <img
            className="w-6 h-6 bg-white rounded-full"
            src={props.slap.slappee.image}
          />
          {props.slap.slappee.name}
        </span>{" "}
        {props.slap.count} times.
      </div>
    </div>
  );
};

export default FeedCard;
