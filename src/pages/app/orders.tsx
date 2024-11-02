import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableRow, TableCell, TableHeader, TableHead } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";

export function Orders() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-foreground font-bold text-lg tracking-tight">Orders</h1>
            <div className="flex flex-col gap-3">
                <form className="flex items-center gap-2">
                    <span>Filters:</span>
                    <Input placeholder="Client name" className="w-[320px] h-8"/>
                </form>

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
                                <TableRow key={i}>
                                    <TableCell>
                                    <Button variant="outline">
                                        <Search className="h-3 w-3" />
                                        <span className="sr-only">Detalhes do pedido</span>
                                    </Button>
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
                                    Diego Schell Fernandes
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
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}