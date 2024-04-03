import type { PropsWithChildren } from 'react';

import { MenuProvider } from '~/global-context/menu';

export const Providers = ({ children }: PropsWithChildren) => {
  return <MenuProvider>{children}</MenuProvider>;
};
