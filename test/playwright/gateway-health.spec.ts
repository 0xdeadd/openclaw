import { expect, test } from "@playwright/test";

test.describe("Gateway health", () => {
  test("GET /health returns ok", async ({ request }) => {
    const res = await request.get("/health");
    expect(res.ok()).toBe(true);
  });

  test("unknown route returns 404", async ({ request }) => {
    const res = await request.get("/nonexistent-route");
    expect(res.status()).toBe(404);
  });
});
