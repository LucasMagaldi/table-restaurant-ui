import { OrderTableFilters } from "@/components/table/order-table-filters";
import { OrderTableRow } from "@/components/table/order-table-row";
import { Table, TableBody, TableRow, TableHeader, TableHead } from "@/components/ui/table";

export function Orders() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-foreground font-bold text-lg tracking-tight">Orders</h1>
            <div className="flex flex-col gap-3">
                <OrderTableFilters />
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[64px]"></TableHead>
                                <TableHead className="w-[140px]">ID</TableHead>
                                <TableHead className="w-[180px]">Created at</TableHead>
                                <TableHead className="w-[140px]">Status</TableHead>
                                <TableHead>Client</TableHead>
                                <TableHead className="w-[140px]">Order cost</TableHead>
                                <TableHead className="w-[164px]"></TableHead>
                                <TableHead className="w-[132px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Array.from({ length: 10 }).map((_, i) => {
                                return (
                                    <OrderTableRow />
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}