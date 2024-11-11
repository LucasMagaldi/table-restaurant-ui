import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getOrderDetail } from "@/hooks/api-orders";
import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale";

interface IProps {
    isOpen: boolean,
    orderId: string
}

export function OrderDetail({ isOpen, orderId } : IProps) {
    const { data: getOrderDetailFn } = useQuery({
        queryKey: ['order-detail', orderId],
        queryFn: () => getOrderDetail({ orderId }),
        enabled: isOpen
    })
    return (
        <>
            {getOrderDetailFn?.data && (
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Order: {orderId}</DialogTitle>
                        <DialogDescription>Order details</DialogDescription>
                    </DialogHeader>
        
                    <div className="space-y-6">
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="text-muted-foreground">Status</TableCell>
                                <TableCell className="flex justify-end">
                                    <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                                    <span className="font-medium text-muted-foreground">
                                        {getOrderDetailFn?.data.status}
                                    </span>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell className="text-muted-foreground">Cliente</TableCell>
                            <TableCell className="flex justify-end">
                                {getOrderDetailFn?.data.customer.name}
                            </TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell className="text-muted-foreground">Telefone</TableCell>
                            <TableCell className="flex justify-end">
                                {getOrderDetailFn?.data.customer.phone}
                            </TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell className="text-muted-foreground">E-mail</TableCell>
                            <TableCell className="flex justify-end">
                                {getOrderDetailFn?.data.customer.email}
                            </TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell className="text-muted-foreground">
                                Realizado há
                            </TableCell>
                            <TableCell className="flex justify-end">{formatDistanceToNow(getOrderDetailFn?.data.createdAt, {
                                locale: ptBR,
                            })}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead>Produto</TableHead>
                            <TableHead className="text-right">Qtd.</TableHead>
                            <TableHead className="text-right">Price</TableHead>
                            <TableHead className="text-right">Subtotal</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {getOrderDetailFn?.data.orderItems.map((items) => (
                                <TableRow key={items.id}>
                                    <TableCell>{items.product.name}</TableCell>
                                    <TableCell>{items.quantity}</TableCell>
                                    <TableCell>{(items.priceInCents / 100).toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',
                                    })}</TableCell>
                                    <TableCell>{((items.priceInCents / 100) * items.quantity).toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',                              
                                    })}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                            <TableCell colSpan={3}>Total </TableCell>
                            <TableCell className="text-right font-medium">
                               {(getOrderDetailFn.data.totalInCents / 100).toLocaleString('pt-BR', {
                                    currency: 'BRL',
                                    style: 'currency'
                               })}
                            </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                    </div>
                </DialogContent>
            )}
        </>    
    )
}