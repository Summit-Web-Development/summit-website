import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata = {
  title: "Summit Web Solutions | High-Performance Web Development Agency",
  description: "Summit is a premium web development agency building blazing-fast, responsive web architectures, custom database platforms, and dynamic local SEO engines for small businesses.",
  metadataBase: new URL("https://summit.vercel.app"),
  keywords: ["web development agency", "small business website", "custom web development", "nextjs web design", "local seo agency", "web application development"],
  openGraph: {
    title: "Summit Web Solutions | Premium Web Development for Small Businesses",
    description: "Modular, blazing-fast web architectures, interactive calculator tools, and direct automation pipelines built to grow your digital workflow.",
    url: "https://summit.vercel.app",
    siteName: "Summit Web Solutions",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
