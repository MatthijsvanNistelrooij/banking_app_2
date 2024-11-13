import HeaderBox from "@/components/HeaderBox"
import NoBalanceBox from "@/components/NoBalanceBox"
import RecentTransactions from "@/components/RecentTransactions"
import RightSidebar from "@/components/RightSidebar"

import TotalBalanceBox from "@/components/TotalBalanceBox"
import { getAccount, getAccounts } from "@/lib/actions/bank.actions"
import { getLoggedInUser } from "@/lib/actions/user.actions"
import { redirect } from "next/navigation"

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1

  const loggedIn = await getLoggedInUser()

  console.log("loggedIn", loggedIn)

  if (!loggedIn) {
    redirect("/sign-in")
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
        transactions: [],
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
        transactions: [],
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
        transactions: [],
      },
      // Add more objects as needed
    ],
  }

  // const accounts = await getAccounts({
  //   userId: loggedIn?.$id
  // })

  // const accounts = null

  // if (!accounts) return

  const accountsData = accounts?.data
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId

  // const account = await getAccount({ appwriteItemId })

  const account = accounts.data

  const mockTransactions = [
    {
      id: "1",
      $id: "txn_1",
      name: "Entertainment Purchase",
      paymentChannel: "Online",
      type: "debit",
      accountId: "account_123",
      amount: 45.99,
      pending: false,
      category: "Entertainment",
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
      name: "Travel Purchase",
      paymentChannel: "Online",
      type: "debit",
      accountId: "account_123",
      amount: 45.99,
      pending: false,
      category: "Travel",
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

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={2}
            totalCurrentBalance={2001.2}
          />
        </header>

        <RecentTransactions
          accounts={accountsData}
          // transactions={account?.transactions}
          transactions={mockTransactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>

      {/* <RightSidebar
        user={loggedIn}
        transactions={[]}
        // banks={[{ currentBalance: 233.50 }, {currentBalance: 235.50}]}
        banks={[]}
      /> */}
    </section>
  )
}

export default Home
