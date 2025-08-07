import '../styles/globals.css'; // ← Correct relative path

export const metadata = {
  title: 'Hostnet Bio',
  description: 'Your one link profile on hostnet',
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
