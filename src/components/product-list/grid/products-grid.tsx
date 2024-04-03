import type { Product } from '~/entities/product';

import { ProductColors } from './product-colors';
import { Styled } from './styled';

export const ProductsGrid = ({ products }: { products: Array<Product> }) => {
  //TODO
  return (
    <Styled.Grid.Wrapper>
      <Styled.Grid.Align>
        {products.map((product) => (
          <Styled.Grid.Product.Product key={product.id}>
            <Styled.Grid.Product.Image>
              <Styled.Grid.Product.ImageSrc src={product.imageSrc} />
            </Styled.Grid.Product.Image>
            <Styled.Grid.Product.Text>
              <div>
                <Styled.Grid.Product.Title>
                  {product.name}
                </Styled.Grid.Product.Title>
                <ProductColors colors={product.colors} />
              </div>
              <Styled.Grid.Product.Price>
                R${' '}
                {product.price.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </Styled.Grid.Product.Price>
            </Styled.Grid.Product.Text>
          </Styled.Grid.Product.Product>
        ))}
      </Styled.Grid.Align>
    </Styled.Grid.Wrapper>
  );
};
