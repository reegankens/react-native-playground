import { request } from "@/shared/api.client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View
} from "react-native";
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
  const [response, setResponse] = useState<FormData | undefined>();
  useEffect(() => {
    getRegister();
    trigger();
  }, []);

  const getRegister = async () => {
    const response = await request<FormData>(
      "http://api.localhost:8081/register",
      {
        method: "GET",
      },
    );
    console.log("getRegister response", response);
    setValue("fullName", response.fullName);
    setValue("email", response.email);
    trigger();
  };

  const {
    control,
    handleSubmit,
    trigger,
    setValue,
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
    const response = await request<FormData>(
      "http://api.localhost:8081/register",
      {
        method: "POST",
        body: JSON.stringify(data),
      },
    );
    setValue("fullName", response.fullName);
    setValue("email", response.email);
    setResponse(response);

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
                placeholder="Enter your full name"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                style={{
                  borderWidth: 1,
                  borderRadius: 8,
                  padding: 12,
                }}
                testID="fullname"
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
                placeholder="Enter your email"
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
                testID="email"
              />
            )}
          />

          {errors.email && (
            <Text style={{ color: "red" }}>{errors.email.message}</Text>
          )}
        </View>

        <Text>response:{JSON.stringify(response)}</Text>

        <Text> {isValid} </Text>
        <Pressable
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
          testID="btn_register"
          style={{
            backgroundColor: isValid ? "#2196F3" : "#D1D5DB",
            padding: 14,
            borderRadius: 8,
            alignItems: "center",
            opacity: isValid ? 1 : 0.7,
          }}
        >
          <Text
            style={{
              color: isValid ? "#FFFFFF" : "#6B7280",
              fontWeight: "600",
            }}
          >
            Register
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
