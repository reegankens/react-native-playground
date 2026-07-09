import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Text, TextInput, View } from "react-native";

type FormData = {
  fullName: string;
  email: string;
};

export default function RegisterScreen() {
  useEffect(() => {
    trigger();
  }, []);

  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      fullName: "",
      email: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <View style={{ padding: 20, gap: 15 }}>
      {/* Full Name */}
      <View>
        <Text>Full Name</Text>

        <Controller
          control={control}
          name="fullName"
          rules={{
            required: "Full name is required",
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="John Doe"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              style={{
                borderWidth: 1,
                borderRadius: 8,
                padding: 12,
              }}
            />
          )}
        />

        {errors.fullName && (
          <Text style={{ color: "red" }}>{errors.fullName.message}</Text>
        )}
      </View>

      {/* Email */}
      <View>
        <Text>Email</Text>

        <Controller
          control={control}
          name="email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="john@mail.com"
              keyboardType="email-address"
              autoCapitalize="none"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              style={{
                borderWidth: 1,
                borderRadius: 8,
                padding: 12,
              }}
            />
          )}
        />

        {errors.email && (
          <Text style={{ color: "red" }}>{errors.email.message}</Text>
        )}
      </View>

      <Button title="Register" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
