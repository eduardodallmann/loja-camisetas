import { w } from 'windstitch';

const Wrapper = w.div(`
    flex
    items-baseline
    justify-between
    border-b
    border-gray-200
    pb-6
    pt-24
`);

const Title = w.h1(`
    text-4xl
    font-bold
    tracking-tight
    text-gray-900
`);

const Header = w.div(`
    flex
    items-center
`);

const SorterStyled = `
    relative
    inline-block
    text-left
`;

const SorterButton = `
    group
    inline-flex
    justify-center
    text-sm
    font-medium
    text-gray-700
    hover:text-gray-900
`;

const SorterIcon = `
    -mr-1
    ml-1
    h-5
    w-5
    flex-shrink-0
    text-gray-400
    group-hover:text-gray-500
`;

const SorterItens = `
    absolute
    right-0
    z-10
    mt-2
    w-52
    origin-top-right
    rounded-md
    bg-white
    shadow-2xl
    ring-1
    ring-black
    ring-opacity-5
    focus:outline-none
`;

const SorterItem = w.div(
  `
    block
    px-4
    py-2
    text-sm
    cursor-pointer
`,
  {
    variants: {
      active: (active: boolean) => (active ? 'bg-gray-100' : ''),
      selected: (selected: boolean) =>
        selected ? 'font-medium text-gray-900' : 'text-gray-500',
    },
  },
);

const OpenMenuButton = w.button(`
  -m-2
  ml-4
  mt-1
  p-2
  text-gray-400
  hover:text-gray-500
  lg:hidden
`);

export const Styled = {
  Wrapper,
  Title,
  Header,
  Sorter: {
    Sorter: SorterStyled,
    Button: SorterButton,
    Icon: SorterIcon,
    Itens: SorterItens,
    Item: SorterItem,
  },
  Menu: {
    Button: OpenMenuButton,
  },
};
