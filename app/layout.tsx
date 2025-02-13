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
    <html lang="en" className="scroll-smooth">
    <head>
      <link rel="preload" href="/pdf.worker.min.js" as="script" />
    </head>
    <body>{children}</body>
  </html>
  )
}
