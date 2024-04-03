import { ProductColor, ProductSize, type Product } from './entities/product';

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const NodeCache = (await import('node-cache')).default;

    global.cacheBase = new NodeCache();
    global.cacheBase.set('products', [
      {
        id: 1,
        name: 'Camiseta Abc',
        price: 100,
        imageSrc:
          'https://cdn.vnda.com.br/1200x/egrey/2023/07/28/15_19_13_171_15_7_2_260_egrey2028071213.jpg',
        colors: [ProductColor.Red, ProductColor.Blue],
        sizes: [ProductSize.XS, ProductSize.S, ProductSize.M],
      },
      {
        id: 2,
        name: 'Camiseta Xyz',
        price: 200,
        imageSrc:
          'https://cdn.vnda.com.br/egrey/2024/02/05/13_56_20_938_13_2_6_693_egrey114392020cocc81pia.jpg',
        colors: [ProductColor.Green, ProductColor.Yellow],
        sizes: [ProductSize.L, ProductSize.XL, ProductSize.XXL],
      },
      {
        id: 3,
        name: 'Camiseta 123',
        price: 300,
        imageSrc:
          'https://cdn.vnda.com.br/egrey/2023/09/13/08_47_07_158_8_9_7_720__ffp7371.jpg',
        colors: [ProductColor.Black, ProductColor.White],
        sizes: [ProductSize.S, ProductSize.M, ProductSize.L],
      },
      {
        id: 4,
        name: 'Camiseta 456',
        price: 400,
        imageSrc:
          'https://cdn.vnda.com.br/egrey/2024/03/06/16_13_04_993_16_3_8_860_egrey8215.jpg',
        colors: [ProductColor.Pink],
        sizes: [ProductSize.XL, ProductSize.XXL],
      },
      {
        id: 5,
        name: 'Camiseta 789',
        price: 500,
        imageSrc:
          'https://cdn.vnda.com.br/egrey/2023/07/26/15_16_55_59_15_7_4_425_egrey5122.jpg',
        colors: [
          ProductColor.Red,
          ProductColor.Blue,
          ProductColor.Green,
          ProductColor.Yellow,
          ProductColor.Black,
          ProductColor.White,
          ProductColor.Pink,
        ],
        sizes: [
          ProductSize.XS,
          ProductSize.S,
          ProductSize.M,
          ProductSize.L,
          ProductSize.XL,
          ProductSize.XXL,
        ],
      },
    ] satisfies Array<Product>);
  }
}
