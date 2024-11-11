import { TableRow, TableCell } from "@/components/ui/table";
import { ArrowRight, BookPlusIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { OrderDetail } from "../dialog/order-detail";
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useState } from "react";


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
            <Button variant="ghost">
                <X className="mr-2 h-3 w-3" />
                Cancelar
            </Button>
            </TableCell>
        </TableRow>
    )
}