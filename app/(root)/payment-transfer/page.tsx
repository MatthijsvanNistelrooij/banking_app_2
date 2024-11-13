import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferForm'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Transfer = async () => {
  const loggedIn = await getLoggedInUser();
//   const accounts = await getAccounts({
//     userId: loggedIn.$id
//   })



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
}
    
  if(!accounts) return;
  
  const accountsData = accounts?.data;

  return (
    <section className="payment-transfer">
      <HeaderBox 
        title="Payment Transfer"
        subtext="Please provide any specific details or notes related to the payment transfer"
      />

      <section className="size-full pt-5">
        <PaymentTransferForm accounts={accountsData} />
      </section>
    </section>
  )
}

export default Transfer