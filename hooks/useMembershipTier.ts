'use client'

import { useSchematicFlag } from "@schematichq/schematic-react";
import { MembershipLevel } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Define the plan change response type
interface PlanChangeDetail {
    planId? : string;
    tier?: string;
    status?: string;
    // Add other properties based on what the checkout/unsubscribe response contains
}

// Define the custom event type
interface PlanChangedEvent extends CustomEvent {
    detail: PlanChangeDetail;
}

function useMembershipTier() : MembershipLevel | null {
  const router = useRouter();

  
  const hasBackstageContent = useSchematicFlag('backstage-content'); 
  const hasCrewContent = useSchematicFlag('crew-member-access-content');
  const hasVIPContent = useSchematicFlag('vip-access-content');

  // Separate useEffect for plan-changed event listener
  useEffect(() => {
    // Listen for plan-changed events
    const handlePlanChanged = (event: PlanChangedEvent) => {
        // Handle the plan change event
        console.log("Plan changed: ", event.detail);

        // You can update UI, refresh data, or trigger other actions here
        // For example, you might want to refetch user entitlements
        window.location.reload(); 
    };

    window.addEventListener('plan-changed', handlePlanChanged as EventListener);

    return () => {
        window.removeEventListener(
            'plan-changed',
            handlePlanChanged as EventListener
        );
    };

  }, [router ]); // Empty dependency array as this only needs to be set up once

  if(hasVIPContent) return 3;
  if(hasCrewContent) return 2;
  if(hasBackstageContent) return 1;

  return null;  
}

export default useMembershipTier;

