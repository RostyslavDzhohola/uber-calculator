
export default function ResultCards(props) {

  const { grossEarnings, netEarnings, grossHourly, netHourly, expenses, timeWorked } = props.value;

  // console.log("grossEarnings " + grossEarnings +
  //   "\nnetEarnings " + netEarnings +
  //   "\ngrossHourly " + grossHourly +
  //   "\nnetHourly " + netHourly +
  //   "\nexpenses " + expenses +
  //   "\ntimeWorked " + timeWorked
  // );

  const stats = [
    { name: 'Hourly Profit', stat: '$' + netHourly.toFixed(2) + ' per hour'},
    { name: 'Hourly Earnings', stat: '$' + grossHourly.toFixed(2) + ' per hour' },
    { name: 'Working Time', stat: timeWorked.toFixed(2) + ' hr' },
    { name: 'Total Income', stat: '$' + grossEarnings.toFixed(2) },
    { name: 'Profit', stat: '$' + netEarnings.toFixed(2) },
    { name: 'Total Expense', stat: '$' + expenses.toFixed(2) },
  ]

  return (
    <div>
      <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">Last 7 days</h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
