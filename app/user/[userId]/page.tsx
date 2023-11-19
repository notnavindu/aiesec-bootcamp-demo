import FeedCard from "@/components/feed-card";
import Slapper from "@/components/user/slapper";
import { getUserById } from "@/lib/db-ops";
import { useSlapStore } from "@/lib/hooks/use-slaps-store";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

export default async function Page({ params }: { params: { userId: string } }) {
  const user = await getUserById(params.userId);
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl">Slap 👋</h1>

        <img
          className="w-24 mt-2 aspect-square bg-white rounded-full"
          src="https://api.dicebear.com/7.x/notionists/svg?seed=Smokeey"
        />

        <h1 className="text-2xl mt-2">{user.name}</h1>
      </div>

      <div className="flex flex-col justify-center">
        <div className="w-full mt-8 opacity-75 text-xl text-center">
          How many times <br />
          would you like to slap?
        </div>

        <Slapper userId={params.userId} />
      </div>
    </div>
  );
}
