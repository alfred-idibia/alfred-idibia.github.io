import type { Metadata, Viewport } from 'next';
import './globals.css';
import ThemeProvider from './components/theme-provider';

export const metadata: Metadata = {
  title: 'Alfred Idibia | Flutter Developer',
  description: 'The portfolio of Alfred Idibia — Flutter developer and software engineer in training, building thoughtful mobile applications and practical digital products.',
  applicationName: 'Alfred Idibia Portfolio',
  keywords: ['Alfred Idibia', 'Flutter Developer', 'Dart', 'Software Engineer', 'Lagos Nigeria', 'SaeshApp'],
  authors: [{ name: 'Alfred Idibia' }],
  openGraph: {
    title: 'Alfred Idibia | Flutter Developer',
    description: 'Building thoughtful mobile applications and practical digital products.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  );
}
