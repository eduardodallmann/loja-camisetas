import { ProductViewer } from '~/components/product-viewer';
import type { Params, SearchParams } from '~/next-types';
import { getShirt } from '~/services/shirts.server';

export default async function ProductPage({
  params,
}: Params<{ slug: string }> & SearchParams) {
  const product = await getShirt({ id: params.slug });

  return <ProductViewer product={product} />;
}
