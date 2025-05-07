import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";

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
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
