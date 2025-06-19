import SchematicWrapper from "@/components/Schematic/SchematicWrapper";
import PricingTitle from "@/components/PricingTitle";

export default function PricingPage() {
  const customerPortalComponentId =
    process.env.NEXT_PUBLIC_CUSTOMER_PORTAL_COMPONENT_ID;
  console.log("customer component: ", customerPortalComponentId)

  if (!customerPortalComponentId) {
    throw new Error("Customer portal component ID is not set");
  }
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-[#F9F0F0] to-[#F9F0F0]/50">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <PricingTitle />

        <div className="bg-white rounded-2xl shadow-xl p-8 ">
          <SchematicWrapper componentId={customerPortalComponentId} />
        </div>
      </div>
    </div>
  );
}
