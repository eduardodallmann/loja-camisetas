import { w } from 'windstitch';

const Wrapper = w.div(`
    border-t
    border-gray-200
    px-4
    py-6
`);

const FilterLabel = w.label(`
    min-w-0
    flex-1
    text-gray-900
    font-medium
`);

const Input = w.input(`
  w-full
  px-2
  py-1
  border
  border-gray-300
  rounded-md
  focus:ring-2
  focus:ring-primary
  focus:outline-none
`);

export const Styled = {
  Wrapper,
  Label: FilterLabel,
  Input,
};
