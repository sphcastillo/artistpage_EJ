"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import useMembershipTier from "@/hooks/useMembershipTier";
import { Heart, Loader2 } from "lucide-react";

function MemberButton() {
  const { user } = useUser();
  const membershipTier = useMembershipTier();

  if (!user) return null;

  if (!membershipTier)
    return (
      <Link href="/pricing">
        <Button className="cursor-pointer bg-gray-500 text-white px-8 py-2 rounded-lg text-base font-semibold hover:bg-gray-700 transition-colors">
          Get a Membership now!
          {/* <Loader2 className="w-4 h-4 animate-spin text-white" /> */}
        </Button>
      </Link>
    );

  if (membershipTier === 1) {
    return (
      <Link href="/pricing">
        <Button className="bg-orange-500 text-white px-8 py-2 rounded-lg text-base font-semibold hover:bg-orange-700 transition-colors">
          Become a Paid Member <Heart className="w-4 h-4 fill-white text-white" />
        </Button>
      </Link>
    );
  }

  if (membershipTier === 2) {
    return (
      <Link href="/pricing">
        <Button className="bg-blue-500 text-white px-8 py-2 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors">
          Upgrade to Electric Collecetive <Heart className="w-4 h-4 fill-white text-white" />
        </Button>
      </Link>
    );
  }

  if (membershipTier === 3) {
    return (
      <Link href="/pricing">
        <Button className="bg-green-500 text-white px-8 py-2 rounded-lg text-base font-semibold hover:bg-green-700 transition-colors">
          Thanks for being a Electric Collective Member!{" "}
          <Heart className="w-4 h-4 fill-white text-white" />
        </Button>
      </Link>
    );
  }
}

export default MemberButton;