import Slider from 'rc-slider';
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

const SliderStyled = w(Slider, {
  className: `
        mt-2
    `,
});

const ValuesWrapper = w.div(`
    flex
    justify-between
    text-sm
    text-gray-500
`);

export const Styled = {
  Wrapper,
  Label: FilterLabel,
  Slider: SliderStyled,
  ValuesWrapper,
};
