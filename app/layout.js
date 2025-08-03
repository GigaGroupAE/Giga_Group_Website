import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Giga Group of Companies - Delivering Excellence Since 1956',
  description:
    'Giga Group is a multi-national business conglomerate with an extensive portfolio and interest in Gold refining, Bullion Trade, Textile, & Real Estate sectors',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
