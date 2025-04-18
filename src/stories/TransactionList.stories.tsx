import TransactionList from '@/components/TransactionList'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TransactionList> = {
  component: TransactionList,
  title: 'Components/TransactionList',
}
export default meta

type Story = StoryObj<typeof TransactionList>

export const Example: Story = {}
