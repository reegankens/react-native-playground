// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://api.localhost:8081/register", () => {
    return HttpResponse.json({
      id: "abc-123",
      fullName: "Eduard",
      email: "bhakti@eduardd.com",
    });
  }),
  http.post("http://api.localhost:8081/register", () => {
    return HttpResponse.json({
      id: "abc-123",
      fullName: "Eduard",
      email: "bhakti@eduardd.com",
    });
  }),
];
