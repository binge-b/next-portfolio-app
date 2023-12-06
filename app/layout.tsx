import type { Metadata } from 'next'
import './globals.css'
import Header from './Header'
import Footer from './Footer'

export const metadata: Metadata = {
  title: 'もっとできる',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="container mx-auto bg-white text-slate-900">
        <Header />

        {children}
        
        <Footer />
        </body>
    </html>
  )
}