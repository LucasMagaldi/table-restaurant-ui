import { api } from "@/lib/axios";

export interface GetOrdersResponse {
    orders: {
      orderId: string
      createdAt: string
      status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
      customerName: string
      total: number
    }[]
    meta: {
      pageIndex: number
      perPage: number
      totalCount: number
    }
}

interface GetOrdersQuery {
  pageIndex?: number | null
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}

interface GetOrderDetailsParams {
  orderId: string
}

export interface GetOrderDetailsResponse {
  id: string
  createdAt: string
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

interface CancelOrderParams {
  orderId: string
}

export async function getOrders({ pageIndex, customerName, orderId, status } : GetOrdersQuery) {
    const response = await api.get<GetOrdersResponse>('/orders', {
        params: {
            pageIndex, 
            customerName,
            orderId,
            status
        }
    })

    return response.data
}

export async function getOrderDetail({ orderId } : GetOrderDetailsParams) {
  const response = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`)

  return response
}

export async function cancelOrder({ orderId } : CancelOrderParams) {
  await api.patch(`/orders/${orderId}/cancel`)
}