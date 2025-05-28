import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ArrowLeft, CarFront } from "lucide-react";

const Header = async ({ isAdminPage = false }) => {
  const isAdmin = false;
  return (
    <div>
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <nav className="mx-auto px-4 py-4 flex items-center justify-between ">
          <Link href={isAdminPage ? "/admin" : "/"} className="flex">
            <Image
              className="h-12 w-auto object-contain"
              src={"/logo.png"}
              alt="Vehiql Logo"
              height={200}
              width={60}
            />
            {isAdminPage && (
              <span className="text-xs font-extralight">admin</span>
            )}
          </Link>

          <div className="flex items-center space-x-4">
            {isAdminPage ? (
              <>
                <Link href={"/"}>
                  <Button
                    variant={"outline"}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft size={18} />
                    <span className="hidden md:inline">Back to App</span>
                  </Button>
                </Link>
              </>
            ) : (
              <SignedIn>
                <Link href={"/saved-cars"}>
                  <Button>
                    <CarFront size={18} />
                    <span className="hidden md:inline">Saved Cars</span>
                  </Button>
                </Link>
                {isAdmin ? (
                  <Link href={"/reservations"}>
                    <Button variant={"outline"}>
                      <CarFront size={18} />
                      <span className="hidden md:inline">My Reservations</span>
                    </Button>
                  </Link>
                ) : (
                  <Link href={"/admin"}>
                    <Button variant={"outline"}>
                      <CarFront size={18} />
                      <span className="hidden md:inline">Admin portal</span>
                    </Button>
                  </Link>
                )}
              </SignedIn>
            )}
            <SignedOut>
              <SignInButton forceRedirectUrl="/">
                <Button variant={"outline"}>Login</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                  },
                }}
              />
            </SignedIn>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
