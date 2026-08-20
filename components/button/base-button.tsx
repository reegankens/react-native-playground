import { Pressable } from "react-native";

type BaseButtonProps = {
  onChange: (value: string) => void;
  children?: React.ReactNode; //menggunakan ? agar di parent tidak harus menggunakan children atau basic slot seperti di vue
};
export function BaseButton({ onChange, children }: BaseButtonProps) {
  return (
    <Pressable
      style={{ backgroundColor: "blue", width: 100 }}
      onPress={() => {
        onChange("value ini dikirim dari child");
      }}
    >
      {children}
    </Pressable>
  );
}
