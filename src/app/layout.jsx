import { Inter } from 'next/font/google'
import './globals.css'

const description =
  'Neelabh Vijayvargia — student at UT Austin studying Math & Business Honors. Previously at Palantir and Capital One.'

const inter = Inter({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-inter',
})

export const metadata = {
  metadataBase: new URL('https://neelabhv.com'),
  title: 'Neelabh Vijayvargia',
  description,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Neelabh Vijayvargia',
    description,
    url: '/',
    siteName: 'Neelabh Vijayvargia',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.png'],
  },
}

export const viewport = {
  themeColor: '#eef3f0',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
