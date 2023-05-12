// `app/dashboard/page.js` is the UI for the `/dashboard` URL
import Calculator from "./Calculator.jsx";
import styles from "../page.module.css";

export default function Page() {
  return (
    <div className={styles.main}>
      <Calculator />
    </div>
  );
}
