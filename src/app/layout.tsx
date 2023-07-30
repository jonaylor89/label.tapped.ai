import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tapped Records',
  description: 'The first ever AI record label. ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="keywords" content="AI record label, music, artificial intelligence, new music, discover music, up-and-coming artists" />
      <meta
        name="description"
        content="Are you an up-and-coming artist who wants to take your music to the next level? Then you need to apply to the world's first AI record label! Our AI-powered algorithms will help you get discovered by the right people, and we'll give you the tools and resources you need to succeed.

        We're looking for artists who are passionate about their music and who are willing to work hard. If you're ready to take your career to the next level, then apply today!"
      />
      <meta property="og:site_name" content="label.tapped.ai" />
      <meta
        property="og:description"
        content="Are you an up-and-coming artist who wants to take your music to the next level? Then you need to apply to the world's first AI record label! Our AI-powered algorithms will help you get discovered by the right people, and we'll give you the tools and resources you need to succeed.

        We're looking for artists who are passionate about their music and who are willing to work hard. If you're ready to take your career to the next level, then apply today!"
      />
      <meta property="og:title" content="The First Ever AI Record Label for Up-and-Coming Artists" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="The First Ever AI Record Label for Up-and-Coming Artists" />
      <meta
        name="twitter:description"
        content="Are you an up-and-coming artist who wants to take your music to the next level? Then you need to apply to the world's first AI record label! Our AI-powered algorithms will help you get discovered by the right people, and we'll give you the tools and resources you need to succeed.

        We're looking for artists who are passionate about their music and who are willing to work hard. If you're ready to take your career to the next level, then apply today!"
      />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
