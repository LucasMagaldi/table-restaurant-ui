import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle,  } from "../ui/card";

export function CardItem() {
    return (
        <Card className="p-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-base font-semibold">Total revenue (month)</CardTitle>
                <DollarSign className="w-4 h-4 text-muted-foreground"/>
            </CardHeader>
            <CardContent>
                <span className="text-2xl font-bold tracking-tight">R$ 1248,60</span>
                <p className="text-xs text-muted-foreground">
                    <span className="text-emerald-500">+2% </span>compared to last month
                </p>
            </CardContent>
        </Card>
    )
}