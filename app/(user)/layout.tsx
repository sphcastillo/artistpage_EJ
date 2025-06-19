import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
import OurSchematicProvider from "@/components/Schematic/OurSchematicProvider";
import { Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import DirectMessageButton from "@/components/DirectMessageButton";

export const metadata: Metadata = {
  title: "Patreon Reimagined",
  description: "A reimagined Patreon experience - built for creators, by this creator. Join me on this journey to create a better platform for creators and their communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <OurSchematicProvider>
        <body className="bg-[#F9F0F0]">
          <Header />
          {children}

          <div className="fixed bottom-4 right-4">
            <DirectMessageButton />
          </div>

          <Toaster position="bottom-center"/>
        </body>

        <SanityLive />
        </OurSchematicProvider>
      </html>
    </ClerkProvider>
  );
}
