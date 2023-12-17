import type { Category } from '~/models/category'
import type { Merchant } from '~/models/merchant'
import type { Product } from '~/models/product'

export interface PlpProps {
  items?: Product[]
  categories?: Category[]
  merchants?: Merchant[]
}
