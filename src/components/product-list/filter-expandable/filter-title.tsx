import { Icon } from '~/components/commons/icon';

import { Styled } from './styled';

export const FilterTitle = ({
  title,
  open,
}: {
  title: string;
  open: boolean;
}) => {
  const icon = open ? 'remove' : 'add';

  return (
    <Styled.Title.Wrapper>
      <Styled.Title.Button>
        <Styled.Title.Title>{title}</Styled.Title.Title>
        <Styled.Title.IconWrapper>
          <Icon icon={icon} className="h-5 w-5" aria-hidden="true" />
        </Styled.Title.IconWrapper>
      </Styled.Title.Button>
    </Styled.Title.Wrapper>
  );
};
