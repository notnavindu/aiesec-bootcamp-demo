import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { auth } from "@/auth";
import AccessDenied from "@/components/access-denied";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIESEC Bootcamp",
  description: "This is an example site to demonstrate how to use Next.js",
};

export default async function RootLayout({
  children,
}: React.PropsWithChildren) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col justify-between w-full h-full min-h-screen">
          <Header />
          <main className="flex-auto w-full max-w-3xl px-4 py-4 mx-auto sm:px-6 md:py-6">
            {session ? <>{children}</> : <AccessDenied />}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
