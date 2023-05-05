import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/globals.css';
import { Domine } from 'next/font/google';

const domine = Domine({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Car Detailing KFT',
  description:
    'A car cosmetics website that shows the different services provided by the business, lists the prices, and showcase images from the processes.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={domine.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
