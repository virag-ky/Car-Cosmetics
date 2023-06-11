import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Car Detailing KFT",
  description:
    "A car cosmetics website that shows the different services provided by the business, lists the prices, and showcase images from the processes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
