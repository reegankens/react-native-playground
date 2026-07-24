// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";

type FormPayload = {
  id?: string;
  fullName: string;
  email: string;
};

export const handlers = [
  http.get("http://api.localhost:8081/register", () => {
    return HttpResponse.json({
      id: "abc-123",
      fullName: "Eduard",
      email: "bhakti@eduardd.com",
    });
  }),
  http.post("http://api.localhost:8081/register", async ({ request }) => {
    try {
      console.log("handler masuk");
      const payloadObj = (await request.json()) as FormPayload;
      // const text = await request.text();
      // console.log("body =", payloadObj);

      return HttpResponse.json({
        id: "1~uuid",
        fullName: payloadObj.fullName,
        email: payloadObj.email,
      });
    } catch (e) {
      console.error("HANDLER ERROR", e);
      throw e;
    }
  }),
];
