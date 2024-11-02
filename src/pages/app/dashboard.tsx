import { CardItem } from "@/components/card-item";

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
    </div>
  )
}

