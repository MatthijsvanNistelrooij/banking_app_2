import BankCard from "@/components/BankCard"
import HeaderBox from "@/components/HeaderBox"
import { getAccounts } from "@/lib/actions/bank.actions"
import { getLoggedInUser } from "@/lib/actions/user.actions"
import React from "react"

const MyBanks = async () => {
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

  //     const accounts = await getAccounts({
  //     userId: loggedIn.$id
  //   })

  const accounts = [
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
    },
    // Add more objects as needed
  ]

  return (
    <section className="flex">
      <div className="my-banks">
        <HeaderBox
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activites."
        />

        <div className="space-y-4">
          <h2 className="header-2">Your cards</h2>
          <div className="flex flex-wrap gap-6">
            {accounts && accounts.length > 0 ? (
              accounts.map((a: Account) => (
                <BankCard
                  key={a.id}
                  account={a}
                  userName={loggedIn?.firstName}
                />
              ))
            ) : (
              <div className="border border-gray-300 rounded-md p-20 text-center">
                NO CARD INFO AVAILABLE
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyBanks
