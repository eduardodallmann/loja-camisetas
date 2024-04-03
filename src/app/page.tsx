'use server';

import { MenuFilterMobile } from '~/components/menu-mobile';
import { Filters } from '~/components/product-list/filters';
import { ProductsGrid } from '~/components/product-list/grid';
import { Header } from '~/components/product-list/header';
import { Styled } from '~/components/product-list/styled';
import type { Params, SearchParams } from '~/next-types';
import { getShirts } from '~/services/shirts.server';

export default async function Home({ searchParams }: Params & SearchParams) {
  const products = await getShirts({ searchParams });

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

            <Styled.Product.Grid>
              <ProductsGrid products={products} />
            </Styled.Product.Grid>
          </Styled.Body>
        </Styled.Selection>
      </Styled.Main>
    </>
  );
}
