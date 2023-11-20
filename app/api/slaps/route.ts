import { getSlapFeed, getTopSlappees, getTopSlappers } from "@/lib/db-ops";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const feed = await getSlapFeed();
  const slappees = await getTopSlappees();
  const slappers = await getTopSlappers();

  return NextResponse.json(
    {
      feed,
      slappees,
      slappers,
    },
    { status: 200 }
  );
};
