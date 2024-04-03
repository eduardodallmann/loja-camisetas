import { ProductColor, ProductSize, type Product } from './entities/product';

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const NodeCache = (await import('node-cache')).default;

    global.cacheBase = new NodeCache();
    global.cacheBase.set('products', [
      {
        id: 1,
        name: 'Product 1',
        price: 100,
        colors: [ProductColor.Red, ProductColor.Blue],
        sizes: [ProductSize.XS, ProductSize.S, ProductSize.M],
      },
      {
        id: 2,
        name: 'Product 2',
        price: 200,
        colors: [ProductColor.Green, ProductColor.Yellow],
        sizes: [ProductSize.L, ProductSize.XL, ProductSize.XXL],
      },
      {
        id: 3,
        name: 'Product 3',
        price: 300,
        colors: [ProductColor.Black, ProductColor.White],
        sizes: [ProductSize.S, ProductSize.M, ProductSize.L],
      },
      {
        id: 4,
        name: 'Product 4',
        price: 400,
        colors: [ProductColor.Pink],
        sizes: [ProductSize.XL, ProductSize.XXL],
      },
      {
        id: 5,
        name: 'Product 5',
        price: 500,
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
