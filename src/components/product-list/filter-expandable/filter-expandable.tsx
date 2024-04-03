import { Disclosure } from '@headlessui/react';

import { FilterOptionList } from './filter-option-list';
import { FilterTitle } from './filter-title';
import { Styled } from './styled';
import type { FilterExpandableProps } from './types';

export const FilterExpandable = ({
  id,
  title,
  options,
  onCheck,
}: FilterExpandableProps) => {
  return (
    <Disclosure as="div" className={Styled.Wrapper}>
      {({ open }) => (
        <>
          <FilterTitle open={open} title={title} />
          <Disclosure.Panel className="pt-6">
            <FilterOptionList id={id} options={options} onCheck={onCheck} />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
