import type { Category } from '~/models/category'

interface CategoryQueryDto {
  data: Category[]
}

export function useCategoryListQuery() {
  return useAsyncData(
    'categories',
    () =>
      $fetch<CategoryQueryDto>(
        'https://interview-api.azkiloan.com/api/v1/categories',
      ),
    {
      transform: (data) => {
        const newData = data.data.reduce<Category[]>((acc, current) => {
          if (!current.mapped) {
            const children = data.data.filter(
              (item) => item.parent === current.id,
            )
            current.children = children
            acc.push(current)
          }
          return acc
        }, [])
        return { data: newData }
      },
    },
  )
}
