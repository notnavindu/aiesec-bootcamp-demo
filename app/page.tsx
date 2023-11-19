import CustomLink from "@/components/custom-link";
import packageJSON from "../package.json";
import FeedCard from "@/components/feed-card";
import UserCard from "@/components/user-card";
import TopSlappers from "@/components/home/top-slappers";
import TopSlappees from "@/components/home/top-slappees";
import SlapFeed from "@/components/home/slap-feed";

export default function Index() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold">NextAuth.js Example</h1>

      <h2 className="text-xl mt-4">Top 6 Slappers</h2>

      <TopSlappers />

      <div className="w-full my-8 h-px bg-slate-800"></div>
      <h2 className="text-xl mt-4">Top 6 Slappees</h2>

      <TopSlappees />

      <div className="w-full my-8 h-px bg-slate-800"></div>

      <h2 className="text-xl mt-4">Slap Feed</h2>

      <div className="mt-2">
        <SlapFeed />
      </div>
    </div>
  );
}
