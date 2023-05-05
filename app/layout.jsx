import './styles/globals.css';
import Footer from './components/Footer';

export const metadata = {
  title: 'Car Detailing KFT',
  description:
    'A car cosmetics website that shows the different services provided by the business, lists the prices, and showcase images from the processes.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
