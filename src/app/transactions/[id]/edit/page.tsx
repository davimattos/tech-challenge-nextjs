'use client'
import { useParams } from 'next/navigation'
import TransactionForm from '@/components/TransactionForm'

export default function EditTransactionPage() {
  const { id } = useParams()

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Transaction #{id}</h1>
      <TransactionForm transactionId={id as string} />
    </main>
  )
}