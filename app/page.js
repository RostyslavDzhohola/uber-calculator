import { Inter } from "next/font/google";
import styles from "./page.module.css";
import SignUp from "./SignUp";

const inter = Inter({ subsets: ["latin"] });
// TODO: Add a new page and place it in the correct folder

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        Hello uber drviers. I want to help you to calculate your actual hopurly earnings. You can go to the calculator page and enter your data.
        For the future launch of the app, you will be able to sign up and save your data.
        Subsribe to get notified when the app is ready.
        {/* <h1 className="text-5xl bg-indigo-400 p-3 rounded-2xl">Home page</h1> */}
        <SignUp />
      </main>
    </div>
  );
}
