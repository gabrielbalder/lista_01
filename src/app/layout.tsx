
import { Inter } from "next/font/google";
import Navbar from "./_components/Navbar"; // Importação relativa
import Footer from "./_components/Footer"; // Importação relativa

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Isso substitui a tag <Head>
export const metadata = {
  title: "My song lyrics - Your Love",
  description: "Lyrics for Your Love by The Outfield",
  icons: [{ rel: "icon", type: "image/jpeg", url: "/imagem/album_art.jpeg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* A pasta 'public' é a raiz. 
        Seu ícone está em 'public/images/album_art.jpeg', 
        então o caminho é '/images/album_art.jpeg' 
      */}
      <body className={`font-sans ${inter.variable}`}>
        {/* Esta div garante que o footer fique no final da página,
          mesmo se o conteúdo for curto.
        */}
        <div className="flex min-h-screen flex-col bg-gray-900 text-white">
          <Navbar />
          {/* 'children' será o conteúdo do seu 'page.tsx' */}
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}