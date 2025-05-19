import HeroBanner from "@/components/HeroBanner";
import InformationPanel from "@/components/InformationPanel";

export default function Home() {
  return (
    <div className="">

      <HeroBanner />

      <div className="-mt-20">
          <InformationPanel />
      </div>

      <hr />

      {/* Post List */}
    </div>
  );
}
