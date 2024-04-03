import { OpenMenuButton } from './open-menu-button';
import { SorterMenu } from './sorter-menu';
import { Styled } from './styled';

export const Header = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>Camisetas</Styled.Title>

      <Styled.Header>
        <SorterMenu />

        <OpenMenuButton />
      </Styled.Header>
    </Styled.Wrapper>
  );
};
