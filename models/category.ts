export interface Category {
  enabled: boolean
  id: number
  mapped: boolean
  name: string
  parent: number | null
  priority: number
  slug: string
  children?: Category[]
}
