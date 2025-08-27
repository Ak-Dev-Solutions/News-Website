import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'HotTopicsHub - Breaking News & Trending Stories Worldwide',
  description:
    'HotTopicsHub brings you the latest breaking news and trending hot topics from around the world – politics, economy, sports, entertainment, tech, and more. Stay informed 24/7.',
  keywords: [
    'breaking news',
    'latest news worldwide',
    'global hot topics',
    'international news',
    'world politics',
    'sports updates',
    'entertainment news',
    'economy updates',
    'technology news',
    'live news 24/7',
    'HotTopicsHub'
  ],
  openGraph: {
    title: 'HotTopicsHub - Global Breaking News & Trending Updates',
    description:
      'Get the latest global breaking news, politics, sports, economy, and trending topics – all in one place at HotTopicsHub.',
    url: 'https://hottopicshub.com',
    siteName: 'HotTopicsHub',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HotTopicsHub - Worldwide Breaking News',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HotTopicsHub - Breaking News & Worldwide Hot Topics',
    description:
      'Stay updated with HotTopicsHub – your trusted source for trending global news in politics, sports, economy, entertainment & technology.',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
