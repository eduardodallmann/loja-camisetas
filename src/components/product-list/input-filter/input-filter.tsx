'use client';

import type { ChangeEvent } from 'react';

import { Styled } from './styled';

export const InputFilter = ({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <Styled.Wrapper>
      <Styled.Label htmlFor={id}>{label}</Styled.Label>
      <Styled.Input
        id={id}
        type="text"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </Styled.Wrapper>
  );
};
