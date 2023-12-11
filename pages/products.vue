<template>
  <div class="plp">
    <Plp
      :items="items"
      :categories="convertCategories(categories)"
      :merchants="merchants"
    />
  </div>
</template>
<script lang="ts" setup>
import Plp from '../components/plp/index.vue'
definePageMeta({
  path: '/products',
  alias: ['/products/:id/:slug'],
})

const items = [
  {
    id: 'Ybwc_okBd7CINZ3k6Yv1',
    name: 'Galaxy A24 128GB RAM 6GB',
    slug: 'galaxy-a24-128gb-ram-6gb',
    available: true,
    categoryId: 47,
    categoryName: 'کالای دیجیتال',
    minPrice: 102990000,
    maxPrice: 102990000,
    imageUrl:
      'https://ghestchy.ir/wp-content/uploads/2023/08/unnamed-file-17.jpg',
    azkivam: false,
    hidden: false,
    merchantName: 'قسطچی',
    merchantId: 263562,
  },
  {
    id: 'MDjiCIcB7H0oYVqArb1_',
    name: 'گوشی سامسونگ S21 FE 5G | حافظه 256 رم 8 گیگابایت Samsung Galaxy S21 FE',
    slug: 'گوشی-سامسونگ-s21-fe-5g-|-حافظه-256-رم-8-گیگابایت-samsung-galaxy-s21-fe',
    available: true,
    categoryId: 47,
    categoryName: 'کالای دیجیتال',
    minPrice: 209990000,
    maxPrice: 209990000,
    imageUrl: 'https://ghestchy.ir/wp-content/uploads/2022/10/18-1.jpg',
    azkivam: false,
    hidden: false,
    merchantName: 'قسطچی',
    merchantId: 263562,
  },
  {
    id: 'V7wc_okBd7CINZ3k6IvQ',
    name: 'گوشی موبایل سامسونگ مدل Galaxy S21 FE 5G دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت',
    slug: 'گوشی-موبایل-سامسونگ-مدل-galaxy-s21-fe-5g-دو-سیم‌-کارت-ظرفیت-256-گیگابایت-و-رم-8-گیگابایت',
    available: true,
    categoryId: 48,
    categoryName: 'گوشی موبایل',
    minPrice: 229990000,
    maxPrice: 229990000,
    imageUrl:
      'https://ghestchy.ir/wp-content/uploads/2023/08/unnamed-file-19.jpg',
    azkivam: false,
    hidden: false,
    merchantName: 'قسطچی',
    merchantId: 263562,
  },
  {
    id: 'Xrwc_okBd7CINZ3k6YuW',
    name: 'گوشی موبایل سامسونگ مدل Galaxy A34 5G دو سیم کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت',
    slug: 'گوشی-موبایل-سامسونگ-مدل-galaxy-a34-5g-دو-سیم-کارت-ظرفیت-128-گیگابایت-و-رم-8-گیگابایت',
    available: true,
    categoryId: 48,
    categoryName: 'گوشی موبایل',
    minPrice: 139990000,
    maxPrice: 139990000,
    imageUrl:
      'https://ghestchy.ir/wp-content/uploads/2023/08/unnamed-file-18.jpg',
    azkivam: false,
    hidden: false,
    merchantName: 'قسطچی',
    merchantId: 263562,
  },
  {
    id: 'F1D1ZYsBMqeUDDh7c3ED',
    name: 'گوشی موبایل شیائومی مدل Redmi A2 plus دو سیم کارت ظرفیت 64 گیگابایت و رم 3 گیگابایت',
    slug: 'گوشی-موبایل-شیائومی-مدل-redmi-a2-plus-دو-سیم-کارت-ظرفیت-64-گیگابایت-و-رم-3-گیگابایت',
    available: true,
    categoryId: 48,
    categoryName: 'گوشی موبایل',
    minPrice: 32500000,
    maxPrice: 32500000,
    imageUrl:
      'https://meghdadit.com/files/product/8djsg7gzmtfzbq511miyrssrnl8f0c4pdnmx0m6owiod2mb73a[Medium].jpg',
    azkivam: false,
    hidden: false,
    merchantName: 'مقداد آی‌تی',
    merchantId: 2661,
  },
  {
    id: 'F1D1ZYsBMqeUDDh7c3ED',
    name: 'گوشی موبایل شیائومی مدل Redmi A2 plus دو سیم کارت ظرفیت 64 گیگابایت و رم 3 گیگابایت',
    slug: 'گوشی-موبایل-شیائومی-مدل-redmi-a2-plus-دو-سیم-کارت-ظرفیت-64-گیگابایت-و-رم-3-گیگابایت',
    available: true,
    categoryId: 48,
    categoryName: 'گوشی موبایل',
    minPrice: 32500000,
    maxPrice: 32500000,
    imageUrl:
      'https://meghdadit.com/files/product/8djsg7gzmtfzbq511miyrssrnl8f0c4pdnmx0m6owiod2mb73a[Medium].jpg',
    azkivam: false,
    hidden: false,
    merchantName: 'مقداد آی‌تی',
    merchantId: 2661,
  },
  {
    id: 'PjxDOosBMqeUDDh7YRxa',
    name: 'گوشی موبایل سامسونگ مدل Galaxy A04 دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت',
    slug: 'گوشی-موبایل-سامسونگ-مدل-galaxy-a04-دو-سیم-کارت-ظرفیت-32-گیگابایت-و-رم-3-گیگابایت',
    available: true,
    categoryId: 48,
    categoryName: 'گوشی موبایل',
    minPrice: 33500000,
    maxPrice: 33500000,
    imageUrl:
      'https://meghdadit.com/files/product/yfoi6kxyh1544qmfntinbxuljer8yvszx083xel7ziu0bfhiu1[Medium].jpg',
    azkivam: false,
    hidden: false,
    merchantName: 'مقداد آی‌تی',
    merchantId: 2661,
  },
  {
    id: 'WDxDOosBMqeUDDh7ZByl',
    name: 'گوشی موبایل ویکو مدل T10 دو سیم کارت ظرفیت 64GB رم 2GB',
    slug: 'گوشی-موبایل-ویکو-مدل-t10-دو-سیم-کارت-ظرفیت-64gb-رم-2gb',
    available: true,
    categoryId: 48,
    categoryName: 'گوشی موبایل',
    minPrice: 37990000,
    maxPrice: 37990000,
    imageUrl:
      'https://meghdadit.com/files/product/mjh8ej7qgn3b6lkh7hhshqgs3n0jbenh05sppurzfpkee3af8e[Medium].jpg',
    azkivam: false,
    hidden: false,
    merchantName: 'مقداد آی‌تی',
    merchantId: 2661,
  },
  {
    id: 'Eb5DA4oBd7CINZ3kJlXP',
    name: 'باندل موس و موس پد و هدست ریزر Razer Battle Bundle',
    slug: 'باندل-موس-و-موس-پد-و-هدست-ریزر-razer-battle-bundle',
    available: true,
    categoryId: 51,
    categoryName: 'هدفون',
    minPrice: 69800000,
    maxPrice: 69800000,
    imageUrl:
      'https://dragon-shop.ir/wp-content/uploads/2023/08/خرید-باندل-موس-و-موس-پد-و-هدست-ریزر-Razer-Battle-Bundle-4.jpg',
    azkivam: false,
    hidden: false,
    merchantName: 'دراگون شاپ',
    merchantId: 44855,
  },
  {
    id: 'JrnQ84kBd7CINZ3kvIji',
    name: 'مانیتور ایسوس 34 اینچ Monitor Asus TUF Gaming VG34VQL1B',
    slug: 'مانیتور-ایسوس-34-اینچ-monitor-asus-tuf-gaming-vg34vql1b',
    available: true,
    categoryId: 47,
    categoryName: 'کالای دیجیتال',
    minPrice: 283000000,
    maxPrice: 283000000,
    imageUrl:
      'https://dragon-shop.ir/wp-content/uploads/2023/08/خرید-مانیتور-ایسوس-34-اینچ-Monitor-Asus-TUF-Gaming-VG34VQL1B-6.jpg',
    azkivam: false,
    hidden: false,
    merchantName: 'دراگون شاپ',
    merchantId: 44855,
  },
]
const categories = [
  {
    id: 47,
    name: 'کالای دیجیتال',
    slug: 'کالای-دیجیتال',
    enabled: true,
    priority: 0,
    mapped: false,
    parent: null,
  },
  {
    id: 48,
    name: 'گوشی موبایل',
    slug: 'گوشی-موبایل',
    enabled: true,
    priority: 0,
    mapped: true,
    parent: 47,
  },
  {
    id: 51,
    name: 'هدفون و اسپیکر',
    slug: 'هدفون-اسپیکر',
    enabled: true,
    priority: 2,
    mapped: true,
    parent: 47,
  },
  {
    id: 52,
    name: 'لوازم جانبی گوشی و تبلت',
    slug: 'لوازم-جانبی-گوشی-و-تبلت',
    enabled: false,
    priority: 1,
    mapped: true,
    parent: 47,
  },
  {
    id: 53,
    name: 'لوازم جانبی لپتاپ و کامپیوتر',
    slug: 'لوازم-جانبی-لپتاپ-و-کامپیوتر',
    enabled: true,
    priority: 10,
    mapped: true,
    parent: 47,
  },
  {
    id: 49,
    name: 'لپتاپ و کامپیوتر',
    slug: 'لپتاپ-و-کامپیوتر',
    enabled: true,
    priority: 9,
    mapped: true,
    parent: 47,
  },
  {
    id: 50,
    name: 'تبلت',
    slug: 'تبلت',
    enabled: true,
    priority: 8,
    mapped: true,
    parent: 49,
  },
  {
    id: 72,
    name: 'خانه و آشپزخانه',
    slug: 'خانه-و-اشپزخانه',
    enabled: true,
    priority: 1,
    mapped: false,
    parent: null,
  },
  {
    id: 80,
    name: 'لوازم برقی خانگی',
    slug: 'لوازم-برقی-خانگی',
    enabled: true,
    priority: 1,
    mapped: true,
    parent: 72,
  },
  {
    id: 66,
    name: 'زیبایی و سلامت',
    slug: 'زیبایی-و-سلامت',
    enabled: true,
    priority: 5,
    mapped: false,
    parent: null,
  },
  {
    id: 68,
    name: 'لوازم بهداشتی',
    slug: 'لوازم-بهداشتی',
    enabled: true,
    priority: 2,
    mapped: true,
    parent: 66,
  },
  {
    id: 85,
    name: 'لوازم تحریر، هنر',
    slug: 'لوازم-تحریر،-هنر',
    enabled: true,
    priority: 8,
    mapped: false,
    parent: null,
  },
  {
    id: 87,
    name: 'آلات موسیقی',
    slug: 'الات-موسیقی',
    enabled: true,
    priority: 0,
    mapped: true,
    parent: 85,
  },
]
const merchants = [
  {
    id: 2661,
    name: 'مقداد آی‌تی',
    enabled: null,
    description: null,
  },
  {
    id: 42777,
    name: 'جنستون',
    enabled: null,
    description: null,
  },
  {
    id: 256077,
    name: 'شیمالی',
    enabled: null,
    description: null,
  },
  {
    id: 118801,
    name: 'تکنولایف',
    enabled: null,
    description: null,
  },
  {
    id: 263562,
    name: 'قسطچی',
    enabled: null,
    description: null,
  },
  {
    id: 115041,
    name: 'ساز کالا',
    enabled: null,
    description: null,
  },
  {
    id: 2662,
    name: 'گوشی شاپ',
    enabled: null,
    description: null,
  },
  {
    id: 53259,
    name: 'کالاتیک',
    enabled: null,
    description: null,
  },
  {
    id: 663770,
    name: 'فرش پاتریس',
    enabled: null,
    description: null,
  },
  {
    id: 44855,
    name: 'دراگون شاپ',
    enabled: null,
    description: null,
  },
  {
    id: 2687,
    name: 'کالاوما',
    enabled: null,
    description: null,
  },
]

const convertCategories = (data: any) => {
  const result = data.reduce((acc, current) => {
    if (!current.mapped) {
      const children = data.filter((item) => item.parent === current.id)
      current.children = children
      acc.push(current)
    }
    return acc
  }, [])
  return result
}
</script>
<style scoped lang="scss">
.plp {
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 3rem;
  margin-top: 20px;
  align-items: start;
  justify-content: space-evenly;
}
</style>
