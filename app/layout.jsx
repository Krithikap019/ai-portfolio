import { DM_Serif_Display, DM_Mono, Syne } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: ["400"], variable: "--font-serif", style: ["normal", "italic"] });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });
const syne = Syne({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-sans" });

export const metadata = {
  title: "Your Name — AI Engineer",
  description: "Personal portfolio showcasing AI projects built with Claude, Next.js, and Python.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmMono.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
