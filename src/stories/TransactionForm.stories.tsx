import TransactionForm from '@/components/TransactionForm'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TransactionForm> = {
  component: TransactionForm,
  title: 'Components/TransactionForm',
}
export default meta

type Story = StoryObj<typeof TransactionForm>

export const Default: Story = {
  args: {
    transactionId: undefined,
  },
}
