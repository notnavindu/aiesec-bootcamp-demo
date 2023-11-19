"use client";
import FeedCard from "@/components/feed-card";
import { useSlapStore } from "@/lib/hooks/use-slaps";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

export default function Index() {
  const [slaps, setSlaps] = useState(0);

  useEffect(() => {
    console.log("🚀 This runs on page load");
  }, []);

  useEffect(() => {
    console.log(`🚀 This runs when 'slaps' value changes. (👋 x ${slaps})`);
  }, [slaps]);

  const incrementSlaps = () => {
    setSlaps(slaps + 1);
  };

  const decrementSlaps = () => {
    if (slaps > 0) {
      setSlaps(slaps - 1);
    }
  };

  return (
    <div className="">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl">Slap 👋</h1>

        <img
          className="w-24 mt-2 aspect-square bg-white rounded-full"
          src="https://api.dicebear.com/7.x/notionists/svg?seed=Smokeey"
        />

        <h1 className="text-2xl mt-2">Navindu Amarakoon</h1>
      </div>

      <div className="flex flex-col justify-center">
        <div className="w-full mt-8 opacity-75 text-xl text-center">
          How many times <br />
          would you like to slap?
        </div>

        <div className=" flex items-center justify-center mt-6">
          <button
            onClick={decrementSlaps}
            className="aspect-square w-20 border-2 rounded-lg border-white/50 flex items-center justify-center"
          >
            <Minus />
          </button>
          <div className="aspect-square w-20 text-4xl flex items-center justify-center">
            {slaps}
          </div>
          <button
            onClick={incrementSlaps}
            className="aspect-square w-20 border-2 rounded-lg border-white/50 flex items-center justify-center"
          >
            <Plus />
          </button>
        </div>
      </div>

      <div className="mt-12 flex items-center justify-center text-3xl max-w-md mx-auto flex-wrap">
        {Array.from({ length: slaps }).map((_, i) => (
          <div key={i}>
            <div>👋</div>
          </div>
        ))}
      </div>
    </div>
  );
}
