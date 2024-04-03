'use client';

import { Styled } from './styled';
import type { FilterOption } from './types';

export const FilterOptionList = ({
  id,
  options,
  onCheck,
}: {
  id: string;
  options: Array<FilterOption>;
  onCheck: (value: string, checked: boolean) => void;
}) => {
  return (
    <div className="space-y-6">
      {options.map((option, optionIdx) => (
        <div key={option.value} className="flex items-center">
          <Styled.List.Checkbox
            id={`filter-mobile-${id}-${optionIdx}`}
            name={`${id}[]`}
            defaultValue={option.value}
            type="checkbox"
            defaultChecked={option.checked}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onCheck(e.target.value, e.target.checked)
            }
          />
          <Styled.List.Label htmlFor={`filter-mobile-${id}-${optionIdx}`}>
            {option.label}
          </Styled.List.Label>
        </div>
      ))}
    </div>
  );
};
