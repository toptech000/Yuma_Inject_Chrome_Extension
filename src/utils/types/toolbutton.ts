import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type ToolButtonPropsType = {
  icon?: IconProp;
  label?: string;
  handler?: () => void;
  transparent?: boolean;
}