export type FilterOption = {
  value: string;
  label: string;
  checked: boolean;
};

export type FilterExpandableProps = {
  id: string;
  title: string;
  options: Array<FilterOption>;
  onCheck: (value: string, checked: boolean) => void;
};
