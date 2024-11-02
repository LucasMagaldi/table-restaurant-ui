import { Search, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export function OrderTableFilters() {
    return (
        <form className="flex items-center gap-2">
            <span>Filters:</span>
            <Input placeholder="Order ID" className="h-8 w-auto"/>
            <Input placeholder="Client name" className="w-[320px] h-8"/>
            <Select defaultValue="all">
                <SelectTrigger className="h-8 w-[180px]">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="canceled">canceled</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="delivering">Delivering</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                </SelectContent>
            </Select>
            <Button variant='secondary' size='icon' type="submit">
                <Search className="w-4 h-4"/>
            </Button>
            <Button size="icon">
                <X className="w-4 h-4"/>
            </Button>
        </form>
    )
}