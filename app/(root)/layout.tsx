import MobileNav from "@/components/MobileNav"
import LeftSidebar from "@/components/LeftSidebar"
import Image from "next/image"
import RightSidebar from "@/components/RightSidebar"
import { getLoggedInUser } from "@/lib/actions/user.actions"
import { useRouter } from "next/router"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const loggedIn = await getLoggedInUser()



  return (
    <main className="flex h-screen w-full font-inter">
      <LeftSidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <MobileNav user={loggedIn} />
        </div>
        {children}
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 233.50 }, {currentBalance: 235.50}]}
        // banks={[]}
      />
    </main>
  )
}
