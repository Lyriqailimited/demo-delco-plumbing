import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Delco Plumbing',
  description: 'Nottingham's trusted plumbers - emergency repairs, leak detection & drain unblocking',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
