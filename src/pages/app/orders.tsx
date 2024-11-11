import { Pagination } from "@/components/pagination";
import { OrderTableFilters } from "@/components/table/order-table-filters";
import { OrderTableRow } from "@/components/table/order-table-row";
import { Table, TableBody, TableRow, TableHeader, TableHead } from "@/components/ui/table";
import { getOrders } from "@/hooks/api-orders";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { z } from 'zod'

export function Orders() {
    const [searchParams, setSearchParams] = useSearchParams()

    const orderId = searchParams.get('orderId')
    const customerName = searchParams.get('customerName')
    const status = searchParams.get('status')


    const pageIndex = z.coerce
        .number()
        .transform((page) => page -1)
        .parse(searchParams.get('page') ?? '1')

    const { data: getOrdersFn } = useQuery({
        queryKey: ['orders', pageIndex, customerName, orderId, status],
        queryFn: () => getOrders({ pageIndex, customerName, orderId, status })
    })

    function handlePagination(pageIndex: number) {
        setSearchParams((state) => {
            state.set('page', (pageIndex + 1).toString())

            return state
        })
    }
    
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
                                <TableHead className="w-[140px]">(R$) Order cost</TableHead>
                                <TableHead className="w-[164px]"></TableHead>
                                <TableHead className="w-[132px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {getOrdersFn?.orders.map((order) => {
                                return (
                                    <OrderTableRow key={order.orderId} order={order}/>
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>
                {getOrdersFn && (
                    <Pagination 
                        pageIndex={pageIndex} 
                        perPage={getOrdersFn?.meta.perPage} 
                        totalItems={getOrdersFn?.meta.totalCount}
                        onPageChange={handlePagination}/>                    
                )}
            </div>
        </div>
    )
}