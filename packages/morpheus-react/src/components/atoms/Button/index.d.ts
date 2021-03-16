export type OptionsProps = {
  type?: string;
  id: string | number;
  label: string
}

export type ButtonProps = {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  medium?: boolean;
  small?: boolean;
  negative?: boolean;
  block?: boolean;
  onClick?: any;
  className?: string;
  options?: OptionsProps[];
  text?: boolean;
  optionWidth?: string;
  optionDirection?: string;
  little?: boolean;
  loading?: boolean
}
