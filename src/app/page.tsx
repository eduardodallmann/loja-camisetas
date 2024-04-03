'use server';

import { MenuFilterMobile } from '~/components/menu-mobile';
import { Filters } from '~/components/product-list/filters';
import { Header } from '~/components/product-list/header';
import { Styled } from '~/components/product-list/styled';

export default async function Home() {
  return (
    <>
      <MenuFilterMobile />

      <Styled.Main>
        <Header />

        <Styled.Selection>
          <Styled.Body>
            <Styled.Filter.Wrapper>
              <Filters />
            </Styled.Filter.Wrapper>

            <Styled.Product.Grid>{/* Your content */}</Styled.Product.Grid>
          </Styled.Body>
        </Styled.Selection>
      </Styled.Main>
    </>
  );
}
