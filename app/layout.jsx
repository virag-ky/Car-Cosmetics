import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
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
      <body className={openSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
