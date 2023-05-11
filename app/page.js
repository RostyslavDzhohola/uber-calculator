import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Calculator from './dashboard/calculator'
import { RouteHandlerManager } from 'next/dist/server/future/route-handler-managers/route-handler-manager'

const inter = Inter({ subsets: ['latin'] })
// TODO: Add a new page and place it in the correct folder

export default function Home() {
  return (
    <div>
      <Head>
        <title>Uber Calculator</title>
        <meta name="description" content="Uber Calculator" />
      </Head>
      <main className={styles.main}>
        <Calculator />
        {/* <header className="bg-white shadow-md">
          <nav className="container mx-auto px-4 py-2">
            <ul className="flex space-x-4 text-5xl">
              <li className="hover:text-blue-600 hover:scale-110 text-black">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-blue-600 hover:scale-110 text-black">
                <Link href="/calculator">Calculator</Link>
              </li>
            </ul>
          </nav>
        </header> */}
        
      </main>
    </div>
  )
}
