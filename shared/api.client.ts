export async function request(
  url: string,
  options?: RequestInit,
  isAuth = true,
) {
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
