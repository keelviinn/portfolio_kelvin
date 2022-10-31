/* eslint-disable @next/next/no-page-custom-font */
"use client";

import { ThemeProvider } from "next-themes";
import { Navigation } from "../components/Navigation";
import { navItems } from "../variables/navItems";

import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Kelvin Oliveira</title>
        <meta name="description" content="Portifolio Kelvin Oliveira" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <ThemeProvider attribute="class">
        <div className="min-h-screen flex flex-col">
          <Navigation navItems={navItems} />
          <main className="h-screen pt-32">{children}</main>
        </div>
      </ThemeProvider>
    </html>
  );
}
