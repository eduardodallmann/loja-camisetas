'use server';

import { Suspense } from 'react';

import { Spinner } from '~/components/commons/spinner';
import { MenuFilterMobile } from '~/components/menu-mobile';
import { Filters } from '~/components/product-list/filters';
import { ProductsGrid } from '~/components/product-list/grid';
import { Header } from '~/components/product-list/header';
import { Styled } from '~/components/product-list/styled';
import type { Params, SearchParams } from '~/next-types';

export default async function Home({ searchParams }: Params & SearchParams) {
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
              <Suspense
                key={JSON.stringify(searchParams)}
                fallback={
                  <Styled.Loading>
                    <Spinner />
                  </Styled.Loading>
                }
              >
                <ProductsGrid searchParams={searchParams} />
              </Suspense>
            </Styled.Product.Grid>
          </Styled.Body>
        </Styled.Selection>
      </Styled.Main>
    </>
  );
}
