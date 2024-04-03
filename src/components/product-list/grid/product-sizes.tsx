import { sizesDTO, type ProductSize } from '~/entities/product';

import { Styled } from './styled';

export const ProductSizes = ({ sizes }: { sizes: Array<ProductSize> }) => {
  return (
    <Styled.Grid.Product.Size.Wrapper>
      {sizesDTO.map((size) => (
        <Styled.Grid.Product.Size.Size
          key={size.value}
          disabled={!sizes.includes(size.value)}
        >
          {size.label}
        </Styled.Grid.Product.Size.Size>
      ))}
    </Styled.Grid.Product.Size.Wrapper>
  );
};
