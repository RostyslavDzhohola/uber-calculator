import './globals.css'
import Link from 'next/link'
import styles from "./page.module.css";
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Uber calculator',
  description: 'An Uber calculator for drivers to calculate their earnings and expenses and net hourly rate.',
}
// TODO: Add nav bar from tailwindcss https://tailwindui.com/components/application-ui/navigation/navbars
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.main}>
        <nav className=' p-6 bg-indigo-500 w-full rounded-md'>
          <Link 
            href="/" 
            className='mx-2 text-2xl hover:scale-110 inline-block active:bg-red-700'>
            Home
          </Link>
          <Link 
            href="/calculator" 
            className='mx-2 text-2xl hover:scale-110 inline-block'
            prefetch={true} >
            Calculator
          </Link>
        </nav>
        <div>
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
