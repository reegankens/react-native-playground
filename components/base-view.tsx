import { View, ViewProps } from "react-native";

export function BaseView({ children, ...props }: ViewProps) {
  return <View {...props}>{children}</View>;
}
