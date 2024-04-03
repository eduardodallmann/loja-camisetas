import type { ProductColor } from '~/entities/product';

import { Styled } from './styled';

export const ProductColors = ({ colors }: { colors: Array<ProductColor> }) => {
  return (
    <Styled.Grid.Product.Color.Wrapper>
      {colors.map((color) => (
        <Styled.Grid.Product.Color.Color key={color} color={color} />
      ))}
    </Styled.Grid.Product.Color.Wrapper>
  );
};
