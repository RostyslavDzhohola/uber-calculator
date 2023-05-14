import './globals.css'
import Link from 'next/link'
import styles from "./page.module.css";
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Uber calculator',
  description: 'Generated by create next app',
}
// TODO: Add nav bar from tailwindcss https://tailwindui.com/components/application-ui/navigation/navbars
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.main}>
        <nav className='m-5'>
          <Link href="/" className='mx-2 text-2xl hover:scale-110 inline-block'>Home</Link>
          <Link href="/calculator" className='mx-2 text-2xl hover:scale-110 inline-block'>Calculator</Link>
        </nav>
        <div>
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
