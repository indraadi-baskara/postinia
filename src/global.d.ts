export interface Customer {
  id: number
  name: string
  phone: string
  address?: string
  email?: string
}

export interface Router {
  isVisited: boolean
}
