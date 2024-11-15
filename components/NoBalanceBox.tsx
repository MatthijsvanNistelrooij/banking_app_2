import Link from "next/link"
import AnimatedCounter from "./AnimatedCounter"
import DoughnutChart from "./DoughnutChart"

const NoBalanceBox = () => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={[]} />
      </div>

      <div className="flex flex-col gap-6">
        <Link href={"/"} className="border border-gray-200 rounded-sm p-3">
          <h2 className="header-2">Connect Bank</h2>
        </Link>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>

          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCounter amount={0.0} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NoBalanceBox
