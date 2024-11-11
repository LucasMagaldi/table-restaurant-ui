import { Search, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "react-router-dom";

const orderFiltersSchema = z.object({
    orderId: z.string().optional(),
    customerName: z.string().optional(),
    status: z.string().optional()
})

type OrderFilterSchema = z.infer<typeof orderFiltersSchema>

export function OrderTableFilters() {
    const [searchParams, setSearchParams] = useSearchParams()

    const orderId = searchParams.get('orderId') ?? ''
    const customerName = searchParams.get('customerName') ?? ''
    const status = searchParams.get('status') ?? 'all'

    const { register, handleSubmit, reset, control } = useForm<OrderFilterSchema>({
        resolver: zodResolver(orderFiltersSchema),
        defaultValues: {
            customerName,
            orderId,
            status
        }
    })

    function handleFilter({ customerName, orderId, status }: OrderFilterSchema) {
        setSearchParams((state) => {
            if(orderId) {
                state.set('orderId', orderId)
            } else {
                state.delete('orderId')
            }

            if(customerName) {
                state.set('customerName', customerName)
            } else {
                state.delete('customerName')
            }     
            
            if(status) {
                state.set('status', status)
            } else {
                state.delete('status')
            }     
            
            state.set('page', '1')
            return state
        })
    }

    function handleClearFilter() {
        setSearchParams((state) => {
            state.delete('orderId')
            state.delete('customerName')
            state.delete('status')
            state.set('page', '1')

            return state
        })

        reset({
            customerName: '',
            status: '',
            orderId: ''
        })
    }

    return (
        <form className="flex items-center gap-2" onSubmit={handleSubmit(handleFilter)}>
            <span>Filters:</span>
            <Input placeholder="Order ID" className="h-8 w-auto" {...register("orderId")}/>
            <Input placeholder="Client name" className="w-[320px] h-8" {...register('customerName')}/>
            <Controller
                name="status"
                control={control}
                render={({ field }) => {
                    return (
                        <Select 
                            defaultValue="all"
                            name={field.name}
                            onValueChange={field.onChange}
                            value={field.value}
                            disabled={field.disabled}>
                            <SelectTrigger className="h-8 w-[180px]">
                                <SelectValue placeholder="all" defaultValue='all'/>
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
                    )
                }}
            >

            </Controller>
            <Button variant='secondary' size='icon' type="submit">
                <Search className="w-4 h-4"/>
            </Button>
            <Button size="icon" onClick={() => handleClearFilter()}>
                <X className="w-4 h-4"/>
            </Button>
        </form>
    )
}