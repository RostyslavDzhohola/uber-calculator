import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  
      <body>
        <nav className='m-5'>
          <Link href="/" className='mx-2 text-2xl hover:scale-110 inline-block'>Home</Link>
          <Link href="/calculator" className='mx-2 text-2xl hover:scale-110 inline-block'>Calculator</Link>
        </nav>
      
        <div>{children}</div>
      </body>
    </html>
  )
}
