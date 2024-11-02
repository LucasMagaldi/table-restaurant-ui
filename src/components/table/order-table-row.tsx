import { TableRow, TableCell } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { OrderDetail } from "../dialog/order-detail";

export function OrderTableRow() {
    return (
        <TableRow>
            <TableCell>
                <Dialog>
                    <DialogTrigger asChild>
                    <Button variant="outline">
                        <Search className="h-3 w-3" />
                        <span className="sr-only">Detalhes do pedido</span>
                    </Button>
                    </DialogTrigger>
                    <OrderDetail />
                </Dialog>
            </TableCell>
            <TableCell className="font-mono text-xs font-medium">
            821e78f7asdhdf128h
            </TableCell>
            <TableCell className="text-muted-foreground">
            há 15 minutos
            </TableCell>
            <TableCell>
            <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                <span className="font-medium text-muted-foreground">
                Pendente
                </span>
            </div>
            </TableCell>
            <TableCell className="font-medium">
            Lucas Serra Magaldi
            </TableCell>
            <TableCell className="font-medium">R$ 149,90</TableCell>
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