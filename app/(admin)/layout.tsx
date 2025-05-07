import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patreon Reimagined - Admin",
  description: "A reimagined Patreon experience - built for creators, by this creator. Join me on this journey to create a better platform for creators and their communities. ADMIN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
  );
}
