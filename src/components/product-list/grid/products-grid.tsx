'use server';

import { EmptyState } from '~/components/commons/empty-state';
import type { SearchParams } from '~/next-types';
import { getShirts } from '~/services/shirts.server';

import { ProductColors } from './product-colors';
import { ProductSizes } from './product-sizes';
import { Styled } from './styled';

export const ProductsGrid = async ({ searchParams }: SearchParams) => {
  const products = await getShirts({ searchParams });

  return (
    <Styled.Grid.Wrapper>
      {products.length === 0 && (
        <EmptyState
          title="Nenhum produto encontrado"
          paragraph="Tente novamente com outros filtros"
        />
      )}
      <Styled.Grid.Align>
        {products.map((product) => (
          <Styled.Grid.Product.Product key={product.id} href={`${product.id}`}>
            <Styled.Grid.Product.Image>
              <Styled.Grid.Product.ImageSrc src={product.image[0].src.small} />
            </Styled.Grid.Product.Image>
            <Styled.Grid.Product.Text>
              <div>
                <Styled.Grid.Product.Title>
                  {product.name}
                </Styled.Grid.Product.Title>
              </div>
              <Styled.Grid.Product.Price>
                R${' '}
                {product.price.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </Styled.Grid.Product.Price>
            </Styled.Grid.Product.Text>
            <ProductColors colors={product.colors} />
            <ProductSizes sizes={product.sizes} />
          </Styled.Grid.Product.Product>
        ))}
      </Styled.Grid.Align>
    </Styled.Grid.Wrapper>
  );
};
