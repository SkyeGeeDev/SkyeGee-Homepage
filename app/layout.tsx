import type { Metadata } from 'next'
import { Inter, Permanent_Marker } from 'next/font/google'
import './globals.css'

const permanent = Permanent_Marker({ subsets: ['latin'] , weight: ['400'] , variable: '--font-permanent-marker'});
const inter = Inter({ subsets: ['latin'] , variable: '--font-inter'});

export const metadata: Metadata = {
  title: 'SkyeGee Headquarters',
  description: 'A homepage for my Web3 Persona, SkyeGee. Everything Web3, Streaming, and Full Stack Web Development all in one shop.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${permanent.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
