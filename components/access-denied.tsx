"use client";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function AccessDenied() {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-4">
        <img src="https://media.tenor.com/hCZvV65KBeMAAAAC/access-denied-nope.gif" />

        <Button onClick={() => signIn()} className="w-full max-w-sm">
          Sign In
        </Button>
      </div>
    </>
  );
}
