"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import CustomLink from "./custom-link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export function MainNav() {
  return (
    <div className="flex items-center space-x-1 lg:space-x-4">
      <CustomLink href="/">
        <Button variant="ghost" className="p-0">
          <div className="text-4xl">👋</div>
        </Button>
      </CustomLink>

      <div className="text-2xl">Slapper</div>
      <div className="ml-4 opacity-50">
        <Link href="/all-users">All Users</Link>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
