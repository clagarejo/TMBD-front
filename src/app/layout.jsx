import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Peli App",
  description: "La mejor app de peliculas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
