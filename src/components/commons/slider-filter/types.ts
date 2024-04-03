export type SliderFilterProps = {
  min: number;
  max: number;
  value: Array<number>;
  onChange: (values: number | Array<number>) => void;
};
