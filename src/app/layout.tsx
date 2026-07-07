import type { Metadata } from "next";
import { Montserrat, Rubik } from "next/font/google";
// Self-hosted Font Awesome 4.7 (bundled from node_modules) instead of a
// render-blocking CDN @import — no external request, faster first paint.
import "font-awesome/css/font-awesome.min.css";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

// Self-hosted Google fonts. Each exposes a CSS variable that globals.css
// references via var(--font-montserrat) / var(--font-rubik).
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "My Portfolio - Stela Gadevska",
  description: "Portfolio of Stela Gadevska, Front-End Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${montserrat.variable} ${rubik.variable}`}>
      <body>
        <div className='main-container'>
          <Sidebar />
          <div className='mainContent'>{children}</div>
        </div>
      </body>
    </html>
  );
}
