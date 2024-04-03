import { w, wx } from 'windstitch';

import { colorsToTailwind, type ProductColor } from '~/entities/product';

const ProductViewerContainer = w.div(`
    pt-6
`);

const ProductViewerNavigateBack = w.div(`
    flex
    gap-2
    text-sm
    mx-auto
    px-4
    sm:px-6
    lg:max-w-7xl
    lg:px-8
    text-gray-500
    hover:text-gray-600
`);

const ProductViewerImageGaleryWrapper = w.div(`
    mx-auto
    mt-6
    max-w-2xl
    sm:px-6
    lg:grid
    lg:max-h-[550px]
    lg:max-w-7xl
    lg:grid-cols-3
    lg:gap-x-8
    lg:px-8
`);

const ProductViewerImageGaleryImage = w.div(
  `
    overflow-hidden
    rounded-lg
    lg:block
`,
  {
    variants: {
      hidden: (hidden: boolean) => (hidden ? 'hidden' : ''),
    },
  },
);

const ProductViewerProductInfoWrapper = w.div(`
    mx-auto
    max-w-2xl
    px-4
    pb-16
    pt-10
    sm:px-6
    lg:grid
    lg:max-w-7xl
    lg:grid-cols-3
    lg:grid-rows-[auto,auto,1fr]
    lg:gap-x-8
    lg:px-8
    lg:pb-24
    lg:pt-16
`);

const ProductViewerProductInfoTitleWrapper = w.div(`
    lg:col-span-2
    lg:border-r
    lg:border-gray-200
    lg:pr-8
`);

const ProductViewerProductInfoTitle = w.h1(`
    text-2xl
    font-bold
    tracking-tight
    text-gray-900
    sm:text-3xl
`);

const ProductViewerProductInfoOptionsWrapper = w.div(`
    mt-4
    lg:row-span-3
    lg:mt-0
`);

const ProductViewerProductInfoOptionsPrice = w.p(`
    text-3xl
    tracking-tight
    text-gray-900
`);

const ProductViewerProductInfoOptionsColor = wx({
  className: `
    relative
    -m-0.5
    flex
    cursor-pointer
    items-center
    justify-center
    rounded-full
    p-0.5
    focus:outline-none
    `,
  variants: {
    checked: (checked: boolean) => (checked ? 'ring-2 ring-slate-600' : ''),
    color: (color: ProductColor) => colorsToTailwind[color],
  },
});

const ProductViewerProductInfoOptionsSize = wx({
  className: `
    group
    relative
    flex
    items-center
    justify-center
    rounded-md
    border
    py-3
    px-4
    text-sm
    font-medium
    uppercase
    hover:bg-gray-50
    focus:outline-none
    sm:flex-1 sm:py-6
    `,
  variants: {
    disabled: (disabled: boolean) =>
      disabled
        ? 'cursor-not-allowed bg-gray-50 text-gray-200'
        : 'cursor-pointer bg-white text-gray-900 shadow-sm',
    active: (active: boolean) => (active ? 'ring-2 ring-indigo-500' : ''),
  },
});

const ProductViewerProductInfoOptionsSizeActive = w.span(
  `
    pointer-events-none
    absolute
    -inset-px
    rounded-md
`,
  {
    variants: {
      checked: (checked: boolean) =>
        checked ? 'border-indigo-500' : 'border-transparent',
      active: (active: boolean) => (active ? 'border' : 'border-2'),
    },
  },
);

const ProductViewerProductInfoOptionsSizeDisabled = () => {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
    >
      <svg
        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        stroke="currentColor"
      >
        <line
          x1={0}
          y1={100}
          x2={100}
          y2={0}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
};

const ProductViewerProductAddToCart = w.button(`
    mt-10
    flex
    w-full
    items-center
    justify-center
    rounded-md
    border
    border-transparent
    bg-indigo-600
    px-8
    py-3
    text-base
    font-medium
    text-white
    hover:bg-indigo-700
    focus:outline-none
    focus:ring-2
    focus:ring-indigo-500
    focus:ring-offset-2
`);

export const Styled = {
  Container: ProductViewerContainer,
  Navigate: {
    Back: ProductViewerNavigateBack,
  },
  ImageGalery: {
    Wrapper: ProductViewerImageGaleryWrapper,
    Image: ProductViewerImageGaleryImage,
  },
  ProductInfo: {
    Wrapper: ProductViewerProductInfoWrapper,
    Title: {
      Wrapper: ProductViewerProductInfoTitleWrapper,
      Title: ProductViewerProductInfoTitle,
    },
    Options: {
      Wrapper: ProductViewerProductInfoOptionsWrapper,
      Price: ProductViewerProductInfoOptionsPrice,
      Color: ProductViewerProductInfoOptionsColor,
      Size: ProductViewerProductInfoOptionsSize,
      SizeActive: ProductViewerProductInfoOptionsSizeActive,
      SizeDisabled: ProductViewerProductInfoOptionsSizeDisabled,
    },
  },
  AddToCart: ProductViewerProductAddToCart,
};
