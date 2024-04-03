'use client';

import { useMemo, useState } from 'react';
import type { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { colorsDTO, sizesDTO } from '~/entities/product';

import { FilterExpandable } from '../commons/filter-expandable';
import { InputFilter } from '../commons/input-filter';
import { SliderFilter } from '../commons/slider-filter';

export const Filters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const color = searchParams.getAll('color');
  const size = searchParams.getAll('size');
  const [name, setName] = useState(searchParams.get('name') || '');
  const min = useMemo(
    () => Number(searchParams.get('min') || '0'),
    [searchParams.get('min')],
  );
  const max = useMemo(
    () => Number(searchParams.get('max') || '1000'),
    [searchParams.get('max')],
  );

  const createFilter = (
    type: string[],
    DTO: Array<{ value: string; label: string }>,
  ) =>
    useMemo(() => {
      return DTO.map((item) => ({
        ...item,
        checked: type.includes(item.value),
      }));
    }, [type]);

  const sizesFilter = createFilter(size, sizesDTO);
  const colorsFilter = createFilter(color, colorsDTO);

  const pushOptions: NavigateOptions = { scroll: false };

  const onCheck = (type: string, value: string, check: boolean) => {
    const currentValues = new Set(searchParams.getAll(type));
    if (check) {
      currentValues.add(value);
    } else {
      currentValues.delete(value);
    }

    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete(type);
    currentValues.forEach((val) => newSearchParams.append(type, val));

    router.push(`${pathname}?${newSearchParams}`, pushOptions);
  };

  let debounceTimer: NodeJS.Timeout;

  const onChange = (type: string, value: string) => {
    setName(value);
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.set(type, value);

      router.push(`${pathname}?${newSearchParams}`, pushOptions);
    }, 1000);
  };

  const onSlider = (value: number | Array<number>) => {
    const [min, max] = Array.isArray(value) ? value : [0, 500];
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('min', min.toString());
    newSearchParams.set('max', max.toString());

    router.push(`${pathname}?${newSearchParams}`, pushOptions);
  };

  return (
    <>
      <SliderFilter min={0} max={500} value={[min, max]} onChange={onSlider} />
      <InputFilter
        id="name"
        label="Nome"
        value={name}
        onChange={(e) => onChange('name', e)}
      />
      <FilterExpandable
        id="colors"
        title="Cores"
        options={colorsFilter}
        onCheck={(value, check) => onCheck('color', value, check)}
      />
      <FilterExpandable
        id="sizes"
        title="Tamanhos"
        options={sizesFilter}
        onCheck={(value, check) => onCheck('size', value, check)}
      />
    </>
  );
};
