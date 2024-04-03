'use client';

import { Icon } from '~/components/commons/icon';
import { useMenu } from '~/hooks/use-menu';

import { Styled } from './styled';

export const OpenMenuButton = () => {
  const { openMenu } = useMenu();

  return (
    <Styled.Menu.Button type="button" onClick={openMenu}>
      <Icon icon="menu" className="h-5 w-5" aria-hidden="true" />
    </Styled.Menu.Button>
  );
};
