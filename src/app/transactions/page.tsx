import TransactionList from '@/components/TransactionList'
import Link from 'next/link'

export default function TransactionsPage() {
  return (
    <main className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <Link href="/transactions/new" className="text-blue-500 hover:underline">+ New Transaction</Link>
      </div>
      <TransactionList />
    </main>
  )
}