import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '../components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PIGLASAPAT 37',
  description: 'PIGLASAPAT 37',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  )
}
