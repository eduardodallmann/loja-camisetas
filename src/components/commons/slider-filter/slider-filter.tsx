'use client';

import { useEffect, useState } from 'react';

import { Styled } from './styled';
import type { SliderFilterProps } from './types';

export const SliderFilter = ({
  min,
  max,
  value,
  onChange,
}: SliderFilterProps) => {
  const [valueInternal, setValueInternal] = useState(value);
  const onChangeInternal = (value: number | Array<number>) => {
    setValueInternal(value as [number, number]);
  };

  useEffect(() => {
    setValueInternal(value);
  }, [value]);

  return (
    <Styled.Wrapper>
      <Styled.Label>Preço</Styled.Label>
      <Styled.Slider
        range
        min={min}
        max={max}
        defaultValue={value}
        value={valueInternal}
        onChange={onChangeInternal}
        onChangeComplete={onChange}
      />
      <Styled.ValuesWrapper>
        <span>R$ {valueInternal[0]}</span>
        <span>R$ {valueInternal[1]}</span>
      </Styled.ValuesWrapper>
    </Styled.Wrapper>
  );
};
