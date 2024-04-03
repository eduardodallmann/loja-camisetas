'use client';

import { Fragment, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Menu, Transition } from '@headlessui/react';

import { Icon } from '~/components/commons/icon';

import { Styled } from './styled';
import { Sort } from './types';

const sortOptions = [
  { value: Sort.PriceLowToHigh, label: 'Preço: menor para maior' },
  { value: Sort.PriceHighToLow, label: 'Preço: maior para menor' },
];

export const SorterMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const sort = useMemo(() => {
    return searchParams.get('sort') || Sort.PriceLowToHigh;
  }, [searchParams.get('sort')]);

  const onCheck = (value: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('sort', value);

    router.push(`${pathname}?${newSearchParams}`);
  };

  return (
    <Menu as="div" className={Styled.Sorter.Sorter}>
      <div>
        <Menu.Button className={Styled.Sorter.Button}>
          Ordenar por
          <Icon
            icon="expand_more"
            className={Styled.Sorter.Icon}
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={Styled.Sorter.Itens}>
          <div className="py-1">
            {sortOptions.map((option) => (
              <Menu.Item key={option.value}>
                {({ active }) => (
                  <Styled.Sorter.Item
                    active={active}
                    selected={option.value === sort}
                    onClick={() => onCheck(option.value)}
                  >
                    {option.label}
                  </Styled.Sorter.Item>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
