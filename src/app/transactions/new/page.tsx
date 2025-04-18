'use client'
import TransactionForm from '@/components/TransactionForm'

export default function NewTransactionPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add Transaction</h1>
      <TransactionForm />
    </main>
  )
}