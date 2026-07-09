import { request } from "@/shared/api.client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, ScrollView, Text, TextInput, View } from "react-native";
import * as yup from "yup";

type FormData = {
  fullName: string;
  email: string;
};

export const registerSchema = yup.object({
  fullName: yup
    .string()
    .required("Full Name is required.")
    .min(3, "Minimal 3 karakter."),

  email: yup.string().required("Email is required").email("Email tidak valid"),
});

export default function RegisterScreen() {
  useEffect(() => {
    trigger();
  }, []);

  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors, isDirty, dirtyFields, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: FormData) => {
    const response = await request(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        body: JSON.stringify(data),
      },
    );

    console.log("response ", response);
  };

  return (
    <ScrollView>
      <View style={{ padding: 20, gap: 15 }}>
        {/* Full Name */}
        <View>
          <Text>Full Name</Text>
          <Controller
            control={control}
            name="fullName"
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

        <Button
          title="Register"
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
        />
      </View>
    </ScrollView>
  );
}
