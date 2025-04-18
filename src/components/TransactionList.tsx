import Link from 'next/link'

const dummyTransactions = [
  { id: '1', description: 'Groceries', amount: 45.00 },
  { id: '2', description: 'Rent', amount: 1200.00 },
]

export default function TransactionList() {
  return (
    <ul className="space-y-2">
      {dummyTransactions.map((tx) => (
        <li key={tx.id} className="border p-4 rounded">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">{tx.description}</p>
              <p className="text-sm text-gray-500">${tx.amount}</p>
            </div>
            <Link
              href={`/transactions/${tx.id}/edit`}
              className="text-blue-500 hover:underline"
            >
              Edit
            </Link>
          </div>
        </li>
      ))}
    </ul>
  )
}
