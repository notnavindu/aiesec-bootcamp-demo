import { auth } from "@/auth";
import { slapUser } from "@/lib/db-ops";
import { NextResponse } from "next/server";

export const POST = auth(async (req) => {
  if (!req.auth) {
    return Response.json({ message: "Not authenticated" }, { status: 401 });
  }
  const { count, slappee } = await req.json();
  await slapUser(req.auth.user.id, slappee, count);

  return Response.json({ data: "Protected data" });
}) as any;
