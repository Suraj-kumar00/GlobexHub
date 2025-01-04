"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { Compass } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const { user } = useUser();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Compass className="h-6 w-6" />
          <span className="font-bold">GlobexHub</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {user && (
            <div className="flex items-center space-x-4">
              <span className="text-sm">{user.fullName}</span>
              <UserButton afterSignOutUrl="/" />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
