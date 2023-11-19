import { getSlapFeed } from "@/lib/db-ops";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const feed = await getSlapFeed();

  return NextResponse.json(
    {
      feed,
    },
    { status: 200 }
  );
};
