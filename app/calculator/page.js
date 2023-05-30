// `app/dashboard/page.js` is the UI for the `/dashboard` URL
import Calculator from "@/components/Calculator.jsx";
import styles from "../page.module.css";

export default function Page() {
  return (
    <div>
      <Calculator />
    </div>
  );
}
