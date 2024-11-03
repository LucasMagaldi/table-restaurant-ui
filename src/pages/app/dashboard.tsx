import { CardItem } from "@/components/card-item";
import { PopularProductsChart } from "@/components/charts/popular-products";
import { RevenueChart } from "@/components/charts/revenue";

export function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-foreground font-bold text-lg tracking-tight">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
      <div className="grid grid-cols-9 gap-4">
        <RevenueChart />
        <PopularProductsChart />
      </div>
    </div>
  )
}

