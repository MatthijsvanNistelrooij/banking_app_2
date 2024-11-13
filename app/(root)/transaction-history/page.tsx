import HeaderBox from "@/components/HeaderBox"
import { Pagination } from "@/components/Pagination"
import TransactionsTable from "@/components/TransactionsTable"
import { getAccount, getAccounts } from "@/lib/actions/bank.actions"
import { getLoggedInUser } from "@/lib/actions/user.actions"
import { formatAmount } from "@/lib/utils"
import React from "react"

const TransactionHistory = async ({
  searchParams: { id, page },
}: SearchParamProps) => {
  const currentPage = Number(page as string) || 1
  //   const loggedIn = await getLoggedInUser();
  const loggedIn = {
    firstName: "Matthijs",
    lastName: "Data",
    $id: "123456",
    email: "email@email.nl",
    userId: "string",
    dwollaCustomerUrl: "string",
    dwollaCustomerId: "string",
    address1: "string",
    city: "string",
    state: "string",
    postalCode: "string",
    dateOfBirth: "string",
    ssn: "string",
  }

  const accounts = {
    data: [
      {
        id: "1",
        availableBalance: 252,
        currentBalance: 6546,
        institutionId: "6654654",
        name: "Matthijs",
        officialName: "Data",
        mask: "mask",
        type: "type",
        subtype: "subtype",
        appwriteItemId: "bank id",
        shareableId: "shareableId",
        transactions: "1",
      },
      {
        id: "2",
        availableBalance: 500,
        currentBalance: 1200,
        institutionId: "998877",
        name: "Alex",
        officialName: "Personal Account",
        mask: "mask123",
        type: "checking",
        subtype: "personal",
        appwriteItemId: "appwrite123",
        shareableId: "shareableId123",
        transactions: "1",
      },
      {
        id: "3",
        availableBalance: 750,
        currentBalance: 1500,
        institutionId: "556677",
        name: "Chris",
        officialName: "Savings Account",
        mask: "mask456",
        type: "savings",
        subtype: "personal",
        appwriteItemId: "appwrite456",
        shareableId: "shareableId456",
        transactions: "1",
      },
      // Add more objects as needed
    ],
  }

  //   const accounts = await getAccounts({
  //     userId: loggedIn.$id,
  //   })

  if (!accounts) return

  const accountsData = accounts?.data
  //   const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId

  const appwriteItemId = "123123"

  //   const account = await getAccount({ appwriteItemId })

  const account = accounts.data

  const currentTransactions = {
    data: [
      { id: 1, name: "Transaction 1", channel: "Channel 1", amount: 100 },
      { id: 2, name: "Transaction 2", channel: "Channel 2", amount: 200 },
      { id: 3, name: "Transaction 3", channel: "Channel 3", amount: 300 },
    ],
  }

  
  const mockTransactions = [
    {
      id: "1",
      $id: "txn_1",
      name: "Grocery Purchase",
      paymentChannel: "Online",
      type: "debit",
      accountId: "account_123",
      amount: 45.99,
      pending: false,
      category: "Groceries",
      date: "2023-11-10",
      image: "https://example.com/transaction-image.jpg",
      $createdAt: "2023-11-10T10:30:00Z",
      channel: "Mobile",
      senderBankId: "bank_001",
      receiverBankId: "bank_002",
    },
    {
      id: "2",
      $id: "txn_2",
      name: "Grocery Purchase",
      paymentChannel: "Online",
      type: "debit",
      accountId: "account_123",
      amount: 45.99,
      pending: false,
      category: "Groceries",
      date: "2023-11-10",
      image: "https://example.com/transaction-image.jpg",
      $createdAt: "2023-11-10T10:30:00Z",
      channel: "Mobile",
      senderBankId: "bank_001",
      receiverBankId: "bank_002",
    },
    {
      id: "3",
      $id: "txn_3",
      name: "Grocery Purchase",
      paymentChannel: "Online",
      type: "debit",
      accountId: "account_123",
      amount: 45.99,
      pending: false,
      category: "Groceries",
      date: "2023-11-10",
      image: "https://example.com/transaction-image.jpg",
      $createdAt: "2023-11-10T10:30:00Z",
      channel: "Mobile",
      senderBankId: "bank_001",
      receiverBankId: "bank_002",
    },
  ]

  const rowsPerPage = 10
  // const totalPages = Math.ceil(account?.transactions.length / rowsPerPage)
  const totalPages = 2

  const indexOfLastTransaction = currentPage * rowsPerPage
  const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage

  //   const currentTransactions = account?.transactions.slice(
  //     indexOfFirstTransaction,
  //     indexOfLastTransaction
  // )

  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox
          title="Transaction History"
          subtext="See your bank details and transactions."
        />
      </div>

      <div className="space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h2 className="text-18 font-bold text-white">
              {/* {account?.data.name} */} ACCOUNT NAAM
            </h2>
            {/* <p className="text-14 text-blue-25">{account?.data.officialName}</p> */}
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              {/* ●●●● ●●●● ●●●● {account?.data.mask} */} ACCOUNT MASK
            </p>
          </div>

          <div className="transactions-account-balance">
            <p className="text-14">Current balance</p>
            <p className="text-24 text-center font-bold">
              {/* {formatAmount(account?.data.currentBalance)} */}{" "}
              CURRENTBALANCE
            </p>
          </div>
        </div>

        <section className="flex w-full flex-col gap-6">
          <TransactionsTable transactions={mockTransactions} />
          {totalPages > 1 && (
            <div className="my-4 w-full">
              <Pagination totalPages={totalPages} page={currentPage} />
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default TransactionHistory
