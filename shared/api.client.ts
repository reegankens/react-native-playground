export async function request<T>(
  url: string,
  options?: RequestInit,
  isAuth = true,
): Promise<T> {
  const token = "123456789";

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (isAuth) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  return response.json();
}
