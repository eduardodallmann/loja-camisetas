import { w } from 'windstitch';

import { ProductColor } from '~/entities/product';

const ProductsGridWrapper = w.div(`*:
    mx-auto
    max-w-2xl
    px-4
    lg:max-w-7xl
    lg:px-8
`);

const ProductsGridAlign = w.div(`
    grid
    grid-cols-1
    gap-x-6
    gap-y-10
    sm:grid-cols-2
    lg:grid-cols-4
    xl:gap-x-8
`);

const ProductsGridProductWrapper = w.div(`
    group
    relative
`);

const ProductsGridProductImageWrapper = w.div(`
    aspect-h-1
    aspect-w-1
    w-full
    overflow-hidden
    rounded-md
    bg-gray-200
    lg:aspect-none
    group-hover:opacity-75
    lg:h-80
`);

const ProductsGridProductImage = w.img(`
    h-full
    w-full
    object-cover
    object-center
    lg:h-full
    lg:w-full
`);

const ProductsGridProductText = w.div(`
    mt-4
    flex
    justify-between
`);

const ProductsGridProductTitle = w.h3(`
    text-sm
    text-gray-700
`);

const ProductsGridProductPrice = w.p(`
    text-sm
    font-medium
    text-gray-900
`);

const ProductsGridProductColorWrapper = w.div(`
    flex
    items-center
    gap-1
    mt-2
`);

const ProductsGridProductColor = w.div(
  `
    w-3
    h-3
    rounded-full
`,
  {
    variants: {
      color: (color: ProductColor) =>
        ({
          [ProductColor.Red]: 'bg-red-600',
          [ProductColor.Blue]: 'bg-blue-600',
          [ProductColor.Green]: 'bg-green-600',
          [ProductColor.Yellow]: 'bg-yellow-600',
          [ProductColor.Black]: 'bg-black',
          [ProductColor.White]: 'bg-white border border-gray-300',
          [ProductColor.Pink]: 'bg-pink-600',
        })[color],
    },
  },
);

const ProductsGridProductSizeWrapper = w.div(`
    w-full
    flex
    justify-between
    mt-2
`);

const ProductsGridProductSize = w.div(
  `
    flex
    items-center
    justify-center
    w-6
    h-6
    border
    border-gray-300
    rounded-md
    text-[9px]
`,
  {
    variants: {
      disabled: (disabled: boolean) =>
        disabled ? 'border-dotted text-gray-300' : '',
    },
  },
);

export const Styled = {
  Grid: {
    Wrapper: ProductsGridWrapper,
    Align: ProductsGridAlign,
    Product: {
      Product: ProductsGridProductWrapper,
      Image: ProductsGridProductImageWrapper,
      ImageSrc: ProductsGridProductImage,
      Text: ProductsGridProductText,
      Title: ProductsGridProductTitle,
      Price: ProductsGridProductPrice,
      Color: {
        Color: ProductsGridProductColor,
        Wrapper: ProductsGridProductColorWrapper,
      },
      Size: {
        Wrapper: ProductsGridProductSizeWrapper,
        Size: ProductsGridProductSize,
      },
    },
  },
};
