import { Button, ButtonProps } from "react-native";

export function BaseButton({ ...props }: ButtonProps) {
  return <Button {...props} />;
}
