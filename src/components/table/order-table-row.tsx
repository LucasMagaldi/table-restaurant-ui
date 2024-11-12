import { TableRow, TableCell } from "@/components/ui/table";
import { ArrowRight, BookPlusIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { OrderDetail } from "../dialog/order-detail";
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelOrder, GetOrdersResponse } from "@/hooks/api-orders";


interface IOrderTableRowProps {
    order: {
        orderId: string
        createdAt: string
        status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
        customerName: string
        total: number        
    }
}

export function OrderTableRow({ order } : IOrderTableRowProps) {
    const [isDetailOpen, setIsDetailOpen] = useState(false)
    const queryClient = useQueryClient()

    const { mutateAsync: cancelOrderFn } = useMutation({
        mutationFn: cancelOrder,
        async onSuccess(_, { orderId }) {
            const cached = queryClient.getQueriesData<GetOrdersResponse>({
                queryKey: ['orders']
            })

            if(!cached) return 

            cached.forEach(([cacheKey, cacheData]) => {
                if(!cacheData) return 

                queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
                    ...cacheData,
                    orders: cacheData.orders.map((order) => {
                        if(order.orderId === orderId) {
                            return { ...order, status: 'canceled'}
                        }

                        return order
                    })
                })
            })

        }
    })

    return (
        <TableRow>
            <TableCell>
                <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
                    <DialogTrigger asChild>
                    <Button variant="outline">
                        <BookPlusIcon className="h-3 w-3" />
                        <span className="sr-only">Detalhes do pedido</span>
                    </Button>
                    </DialogTrigger>
                    <OrderDetail isOpen={isDetailOpen} orderId={order.orderId}/>
                </Dialog>
            </TableCell>
            <TableCell className="font-mono text-xs font-medium">
            {order.orderId}
            </TableCell>
            <TableCell className="text-muted-foreground">
            {formatDistanceToNow(order.createdAt, {
                locale: ptBR,
                addSuffix: true
            })}
            </TableCell>
            <TableCell>
            <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                <span className="font-medium text-muted-foreground">
                {order.status}
                </span>
            </div>
            </TableCell>
            <TableCell className="font-medium">
            {order.customerName}
            </TableCell>
            <TableCell className="font-medium">
                {order.total.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })}
            </TableCell>
            <TableCell>
            <Button variant="outline">
                <ArrowRight className="mr-2 h-3 w-3" />
                Aprovar
            </Button>
            </TableCell>
            <TableCell>
            <Button 
                variant="ghost" 
                disabled={!['pending', 'processing'].includes(order.status)} 
                onClick={() => cancelOrderFn({ orderId: order.orderId})}>
                <X className="mr-2 h-3 w-3" />
                Cancelar
            </Button>
            </TableCell>
        </TableRow>
    )
}