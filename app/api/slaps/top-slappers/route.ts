import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  // const banners = await getAllBannersFromDB();

  return NextResponse.json(
    {
      // banners,
    },
    { status: 200 }
  );
};
