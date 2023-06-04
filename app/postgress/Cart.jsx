import { sql } from "@vercel/postgres";

export default async function Cart({ params }) {
  const { rows } = await sql`SELECT * FROM drivers WHERE driver_id=1`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.driver_id}>
          EARNINGS: {row.earnings} TIME_WORKED: {row.time_worked}
        </div>
      ))}
    </div>
  );
}
