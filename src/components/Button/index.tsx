import { StyledButton } from "./index.style";

export type ButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement>;

export function Button({
  ...rest
}: ButtonProps) {
  return (
    <StyledButton
      {...rest}
    />
  );
}