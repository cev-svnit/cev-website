import './globals.css';

export const metadata = {
  title: 'CEV',
  description: 'Cutting Edge Visionaries',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
