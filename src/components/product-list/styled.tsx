import { w } from 'windstitch';

{
  /* <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> */
}
const Main = w.main(`
    mx-auto
    max-w-7xl
    px-4
    sm:px-6
    lg:px-8
`);

const Selection = w.section(`
    pb-24
    pt-6
`);

const BodyGrid = w.div(`
    grid
    grid-cols-1
    gap-x-8
    gap-y-10
    lg:grid-cols-4
`);

const FilterWrapper = w.div(`
    hidden
    lg:block
`);

const ProductGrid = w.div(`
lg:col-span-3
`);

export const Styled = {
  Main,
  Selection,
  Body: BodyGrid,
  Filter: {
    Wrapper: FilterWrapper,
  },
  Product: {
    Grid: ProductGrid,
  },
};
