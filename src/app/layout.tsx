import './styles/globals.css';

export const metadata = {
  title: 'Hostnet Bio',
  description: 'Your one link profile on hostnet',
  metadataBase: new URL('https://hostnet.lol'),
  openGraph: {
    title: 'Hostnet Bio',
    description: 'Connect with creators on Hostnet',
    url: 'https://hostnet.lol',
    siteName: 'Hostnet Bio',
    images: [
      {
        url: 'https://hostnet.lol/og-image.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
