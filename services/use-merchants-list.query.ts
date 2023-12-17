import type { Merchant } from '~/models/merchant'

interface MerchantQueryDto {
  data: Merchant[]
}

export function useMerchantsListQuery() {
  return useAsyncData('merchants', () =>
    $fetch<MerchantQueryDto>(
      'https://interview-api.azkiloan.com/api/v1/merchants',
    ),
  )
}
