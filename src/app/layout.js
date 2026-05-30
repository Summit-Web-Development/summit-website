import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    default: "Summit Webcraft | High-Performance Websites for Service Businesses",
    template: "%s | Summit Webcraft",
  },
  verification: {
    google: "VkyfKc-pnHbN4vQATbr-pFi8NZGjPWDh3Ip39LRe3t4",
  },
  description:
    "Summit Webcraft builds blazing-fast, lead-generating websites for service businesses across North America. Custom web design, SEO, ads, and AI receptionist services.",
  metadataBase: new URL("https://summitwebcraft.com"),
  keywords: [
    "web design agency",
    "custom website design",
    "web development Toronto",
    "small business website",
    "SEO services",
    "local business website",
    "web design Canada",
  ],
  openGraph: {
    title: "Summit Webcraft | High-Performance Websites for Service Businesses",
    description:
      "Custom web design, SEO, and digital marketing for service businesses across North America.",
    url: "https://summitwebcraft.com",
    siteName: "Summit Webcraft",
    locale: "en_CA",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-CA">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
