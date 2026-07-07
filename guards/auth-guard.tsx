import { useSession } from "@/context/auth";
import { Redirect } from "expo-router";
import type { PropsWithChildren } from "react";

export function AuthGuard({ children }: PropsWithChildren) {
  const { session, isLoading } = useSession();
  if (isLoading) {
    return null;
  }

  if (!session) {
    return <Redirect href="/login" />;
  }

  return children;
}
