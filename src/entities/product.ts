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

export type Product = {
  id: number;
  name: string;
  price: number;
  imageSrc: string;
  colors: ProductColor[];
  sizes: ProductSize[];
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

export const sizesDTO = [
  { value: ProductSize.XS, label: 'XP' },
  { value: ProductSize.S, label: 'P' },
  { value: ProductSize.M, label: 'M' },
  { value: ProductSize.L, label: 'G' },
  { value: ProductSize.XL, label: 'XG' },
  { value: ProductSize.XXL, label: 'XXG' },
];
