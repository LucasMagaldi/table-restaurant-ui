import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "../ui/button";

interface IProps {
    totalItems: number
    pageIndex: number
    perPage: number
}

export function Pagination({ pageIndex, perPage, totalItems } : IProps) {
    const pages = Math.ceil(totalItems / perPage) || 1
    return (
        <div className="flex items-center justify-between">
            <span>
                total de {totalItems} items
            </span>

            <div className="flex items-center gap-6">
                <span>Page {pageIndex + 1} of {pages}</span>

                <div className="flex items-center gap-2">
                    <Button className="h-8 w-8 p-0">
                        <ChevronsLeft className="w-4 h-4"/>
                        <span className="sr-only">First page</span>
                    </Button>
                    <Button className="h-8 w-8 p-0">
                        <ChevronLeft className="w-4 h-4"/>
                        <span className="sr-only">Previous page</span>
                    </Button>
                    <Button className="h-8 w-8 p-0">
                        <ChevronRight className="w-4 h-4"/>
                        <span className="sr-only">Next page</span>
                    </Button>
                    <Button className="h-8 w-8 p-0">
                        <ChevronsRight className="w-4 h-4"/>
                        <span className="sr-only">Last page</span>
                    </Button>
                </div>
            </div> 
        </div>
    )
}