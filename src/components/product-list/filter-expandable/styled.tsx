import { Disclosure } from '@headlessui/react';
import { w } from 'windstitch';

const Wrapper = `
    border-t
    border-gray-200
    px-4
    py-6
`;

const TitleWrapper = w.h3(`
    -mx-2
    -my-3
    flow-root
`);

const TitleButton = w(Disclosure.Button, {
  className: `
        flex
        w-full
        items-center
        justify-between
        bg-white
        px-2
        py-3
        text-gray-400
        hover:text-gray-500
    `,
});

const TitleStyled = w.span(`
    font-medium
    text-gray-900
`);

const ExpandableIconWrapper = w.span(`
    ml-6
    flex
    items-center
`);

const FilterCheckbox = w.input(`
    h-4
    w-4
    rounded
    border-gray-300
    text-indigo-600
    focus:ring-indigo-500
`);

const FilterLabel = w.label(`
    ml-3
    min-w-0
    flex-1
    text-gray-500
`);

export const Styled = {
  Wrapper,
  Title: {
    Wrapper: TitleWrapper,
    Button: TitleButton,
    Title: TitleStyled,
    IconWrapper: ExpandableIconWrapper,
  },
  List: {
    Checkbox: FilterCheckbox,
    Label: FilterLabel,
  },
};
