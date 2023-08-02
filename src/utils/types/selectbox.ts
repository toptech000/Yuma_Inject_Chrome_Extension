import { InputPropsType } from "./formfield";

export type SelectBoxPropsType = InputPropsType & {
  items?: SelectItemType[]
}

export type SelectItemType  = {
  label: string;
  value: string | number;
}