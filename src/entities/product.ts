export enum ProductColor {
  Red = 'red',
  Blue = 'blue',
  Green = 'green',
  Yellow = 'yellow',
  Black = 'black',
  White = 'white',
  Pink = 'pink',
}

export enum ProductSize {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
  XXL = 'xxl',
}

export type Image = {
  src: {
    small: string;
    big: string;
  };
  alt: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  image: Array<Image>;
  description: string;
  highlights: Array<string>;
  details: string;
  colors: Array<ProductColor>;
  sizes: Array<ProductSize>;
};

export const colorsDTO = [
  { value: ProductColor.Red, label: 'Vermelho' },
  { value: ProductColor.Blue, label: 'Azul' },
  { value: ProductColor.Green, label: 'Verde' },
  { value: ProductColor.Yellow, label: 'Amarelo' },
  { value: ProductColor.Black, label: 'Preto' },
  { value: ProductColor.White, label: 'Branco' },
  { value: ProductColor.Pink, label: 'Rosa' },
];

export const colorsToTailwind = {
  [ProductColor.Red]: 'bg-red-600',
  [ProductColor.Blue]: 'bg-blue-600',
  [ProductColor.Green]: 'bg-green-600',
  [ProductColor.Yellow]: 'bg-yellow-600',
  [ProductColor.Black]: 'bg-black',
  [ProductColor.White]: 'bg-white border border-gray-300',
  [ProductColor.Pink]: 'bg-pink-600',
};

export const sizesDTO = [
  { value: ProductSize.XS, label: 'XP' },
  { value: ProductSize.S, label: 'P' },
  { value: ProductSize.M, label: 'M' },
  { value: ProductSize.L, label: 'G' },
  { value: ProductSize.XL, label: 'XG' },
  { value: ProductSize.XXL, label: 'XXG' },
];
