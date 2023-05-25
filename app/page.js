import { Inter } from "next/font/google";
import styles from "./page.module.css";
import SignUp from "./SignUp";

const inter = Inter({ subsets: ["latin"] });
// TODO: Add a new page and place it in the correct folder

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className="text-5xl bg-indigo-400 p-3 rounded-2xl">Home page</h1>
        <SignUp />
      </main>
    </div>
  );
}
