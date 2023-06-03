import { Inter } from "next/font/google";
import styles from "./page.module.css";
import SignUp from "./SignUp";

const inter = Inter({ subsets: ["latin"] });
// TODO: Add a new page and place it in the correct folder

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div class="container mx-auto px-4">
          <h1 class="text-4xl font-bold my-4">Uber Calculator: Your Financial Co-Pilot in Ridesharing</h1>
          <p class="text-lg my-2">Navigating the financial landscape of ridesharing can be a challenge. That's why I created the Uber Calculator - a tool designed to empower Uber drivers with real-time, transparent insights into their earnings.</p>

          <h2 class="text-3xl font-bold my-4">The Full Picture</h2>
          <p class="text-lg my-2">While claims suggest earnings of around $31 per hour, we know that's only half the story. Operational expenses, varying maintenance costs, and personal car expenses all play a part in your actual hourly rate. The Uber Calculator is designed to consider all these factors, giving you a comprehensive view of your earnings, much like an "Uber fare calculator".</p>

          <h2 class="text-3xl font-bold my-4">Born from Experience</h2>
          <p class="text-lg my-2">As the sole creator of the Uber Calculator and a former Uber driver, I personally experienced the financial uncertainties of ridesharing. After analyzing my expenses, I realized the potential savings I could have made by renting a car instead of using my own. This personal insight was the spark that ignited the creation of the Uber Calculator.</p>

          <h2 class="text-3xl font-bold my-4">A Comprehensive Dashboard</h2>
          <p class="text-lg my-2">The Uber Calculator is more than just a tool - it's a dashboard that tracks your work hours and dynamically calculates your actual hourly earnings after accounting for all operational expenses. It's the tool I wish I had when I started driving for Uber, a real-time "Uber cost calculator".</p>

          <h2 class="text-3xl font-bold my-4">Maximize Your Earnings</h2>
          <p class="text-lg my-2">With a clear breakdown of profits and expenses, you can strategize to maximize your earnings and efficiently manage your time on the platform. The Uber Calculator is here to assist in better financial planning and to give you a clear view of what you're really earning, much like an "Uber price calculator".</p>

          <h2 class="text-3xl font-bold my-4">Join Me on the Journey</h2>
          <p class="text-lg my-2">Consider this project as my open application to Uber. I'm building something that directly addresses a need I experienced first-hand and that could potentially benefit the broader Uber driving community. I invite you to join me on this journey to empower Uber drivers with the financial transparency they deserve.</p>
        </div>

        <SignUp />
      </main>
    </div>
  );
}
