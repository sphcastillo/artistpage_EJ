import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { HeartIcon } from "lucide-react";
import { getSiteSettings } from "@/sanity/lib/siteSettings/getSiteSettings";

async function Header() {
  const siteSettings = await getSiteSettings();
  console.log(siteSettings);
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      {/* Left side */}
      <div>
        <Link href="/">
          <h2>{siteSettings?.siteTitle}</h2>
        </Link>
      </div>

      {/* Right side */}
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <Button
            asChild
            variant="outline"
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            <div>
              <SignInButton mode="modal" />
              <HeartIcon className="w-4 h-4" />
            </div>
          </Button>
        </SignedOut>
      </div>
    </header>
  );
}
export default Header;
