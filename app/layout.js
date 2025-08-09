import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ChatwootWidget from './components/ChatwootWidget';
import Head from 'next/head';

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
        <Head>
          <script
            src="https://analytics.ahrefs.com/analytics.js"
            data-key="4x8HziLCIVvUw2fBAoX4DA"
            async
          ></script>
        </Head>
        <Navbar />
        <ChatwootWidget />
        <Analytics />
        <SpeedInsights />
        {children}
        <Footer />
      </body>
    </html>
  );
}
