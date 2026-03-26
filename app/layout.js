import { Outfit, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppPopup from "@/components/WhatsAppPopup";
import { ThemeProvider } from "./ThemeProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Bramma Face and Hair | Premium Hair Restoration",
  description: "Experience a transparent, diagnostic-led consultation at Bramma Face and Hair. We move beyond surface-level fixes with specialized treatments tailored to your unique needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${cormorant.variable}`}>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppPopup />
        </ThemeProvider>
      </body>
    </html>
  );
}
