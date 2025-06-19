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
  title: "Erin Jade's Artist Page",
  description: "Disclaimer: This artist page is a creative and educational project inspired by the work of Erin Jade. While Erin Jade is a real and immensely talented artist, this page is not created, managed, or officially affiliated with her. All content is for educational and demonstration purposes only and should not be interpreted as representing Erin Jade or her personal brand.",
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
