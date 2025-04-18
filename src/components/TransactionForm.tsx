'use client'
import { useState } from 'react'

type Props = {
  transactionId?: string
}

export default function TransactionForm({ transactionId }: Props) {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você faria POST ou PUT dependendo se `transactionId` existe
    alert(`Saved: ${description} - $${amount}`)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Description"
        className="border p-2 w-full"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        className="border p-2 w-full"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  )
}
