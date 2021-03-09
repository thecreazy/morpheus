export type OptionsProps = {
  type?: string;
  id: string | number;
  label: string
}

export type ButtonProps = {
  type?: "button" | "submit" | "reset";
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  medium?: boolean;
  small?: boolean;
  confirm?: boolean;
  danger?: boolean;
  negative?: boolean;
  block?: boolean;
  onClick?: any;
  icon?: string | boolean;
  className?: string;
  dashed?: boolean;
  left?: boolean;
  options?: OptionsProps[];
  text?: boolean;
  empty?: boolean;
  optionWidth?: string;
  optionDirection?: string;
  little?: boolean;
  cerulean?: boolean;
  tangerine?: boolean;
  loading?: boolean

}
