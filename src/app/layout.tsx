import "@/styles/globals.css"; 
import { Inter } from "next/font/google";
import { Navbar } from "@/app/_components/Navbar"; 
import { Footer } from "@/app/_components/Footer";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Music Player",
  description: "Listen to your favorite music.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} font-sans`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

