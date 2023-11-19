"use client";
import { Minus, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";

type Props = {
  userId: string;
};

const Slapper = (props: Props) => {
  const [slaps, setSlaps] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("🚀 This runs on page load");

    return () => {
      console.log("🚀 This runs on page unload");
    };
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

  const handleSlapClick = async () => {
    setLoading(true);
    await axios.post(`/api/slap/${props.userId}`, {
      count: slaps,
      slappee: props.userId,
    });
    setLoading(false);
    setSlaps(0);
  };

  return (
    <>
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

      <div className="mt-12 flex items-center justify-center text-3xl max-w-md mx-auto flex-wrap">
        {Array.from({ length: slaps }).map((_, i) => (
          <div key={i}>
            <div>👋</div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-sm mx-auto mt-8">
        <Button
          onClick={handleSlapClick}
          className="w-full"
          disabled={slaps == 0 || loading}
        >
          Send Slaps
        </Button>
      </div>
    </>
  );
};

export default Slapper;
