import { getTopSlappers } from "@/lib/db-ops";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const slappers = await getTopSlappers();

  return NextResponse.json(
    {
      slappers,
    },
    { status: 200 }
  );
};
