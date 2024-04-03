import { Sort } from '~/components/product-list/header/types';
import type { Product } from '~/entities/product';
import type { SearchParams } from '~/next-types';

function searchParamsToPredicates({ searchParams }: SearchParams) {
  const predicates = [];

  const min =
    searchParams?.min && typeof searchParams.min === 'string'
      ? parseInt(searchParams.min)
      : 0;
  const max =
    searchParams?.max && typeof searchParams.max === 'string'
      ? parseInt(searchParams.max)
      : 500;
  predicates.push(
    (product: Product) => product.price >= min && product.price <= max,
  );

  const name = searchParams?.name;
  if (name && typeof name === 'string') {
    predicates.push((product: Product) =>
      product.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  let colors = new Set();
  if (searchParams?.color) {
    colors = new Set(
      typeof searchParams.color === 'string'
        ? [searchParams.color]
        : searchParams.color,
    );
  }
  if (colors.size > 0) {
    predicates.push((product: Product) =>
      product.colors.some((color) => colors.has(color)),
    );
  }

  let sizes = new Set();
  if (searchParams?.size) {
    sizes = new Set(
      typeof searchParams.size === 'string'
        ? [searchParams.size]
        : searchParams.size,
    );
  }
  if (sizes.size > 0) {
    predicates.push((product: Product) =>
      product.sizes.some((size) => sizes.has(size)),
    );
  }

  return predicates;
}

export function getShirts({ searchParams }: SearchParams) {
  const products = global.cacheBase.get<Array<Product>>('products') || [];

  const predicates = searchParamsToPredicates({ searchParams });
  const filteredProducts = products.filter((product) =>
    predicates.every((predicate) => predicate(product)),
  );

  const sortedProducts = [...filteredProducts];

  if (searchParams?.sort) {
    if (searchParams.sort === Sort.PriceLowToHigh) {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (searchParams.sort === Sort.PriceHighToLow) {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
  }

  return new Promise<Array<Product>>((resolve) => {
    setTimeout(() => {
      resolve(sortedProducts);
    }, 1000);
  });
}

export function getShirt({ id }: { id: string }) {
  const products = global.cacheBase.get<Array<Product>>('products') || [];

  const finded = products.find((product) => product.id === Number(id));

  if (!finded) {
    throw new Error('Product not found');
  }

  return new Promise<Product>((resolve) => {
    setTimeout(() => {
      resolve(finded);
    }, 1000);
  });
}
