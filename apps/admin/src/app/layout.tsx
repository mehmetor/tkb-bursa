import { Metadata } from "next";
import React, { Suspense } from "react";
import { RefineContext } from "./providers";

export const metadata: Metadata = {
  title: "TKB Bursa - Admin",
  description: "Yönetim Paneli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <Suspense>
          <RefineContext>{children}</RefineContext>
        </Suspense>
      </body>
    </html>
  );
}

