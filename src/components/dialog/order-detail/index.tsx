import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function OrderDetail() {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Order: 178xsnkb37hx</DialogTitle>
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
                                Pendente
                            </span>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="text-muted-foreground">Cliente</TableCell>
                    <TableCell className="flex justify-end">
                        Lucas Magaldi
                    </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="text-muted-foreground">Telefone</TableCell>
                    <TableCell className="flex justify-end">
                        (41) 99999-9999
                    </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="text-muted-foreground">E-mail</TableCell>
                    <TableCell className="flex justify-end">
                        lucas.magaldi@hotmail.com
                    </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="text-muted-foreground">
                        Realizado há
                    </TableCell>
                    <TableCell className="flex justify-end">há 3 minutos</TableCell>
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
                    <TableRow>
                    <TableCell>Pizza Pepperoni famiglia</TableCell>
                    <TableCell className="text-right">2</TableCell>
                    <TableCell className="text-right">$ 69,90</TableCell>
                    <TableCell className="text-right">$ 139,80</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>Pizza Mussarela famiglia</TableCell>
                    <TableCell className="text-right">2</TableCell>
                    <TableCell className="text-right">$ 59,90</TableCell>
                    <TableCell className="text-right">$ 119,80</TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                    <TableCell colSpan={3}>Total </TableCell>
                    <TableCell className="text-right font-medium">
                        $ 259,60
                    </TableCell>
                    </TableRow>
                </TableFooter>
              </Table>
            </div>
        </DialogContent>
    )
}