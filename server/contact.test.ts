import { describe, it, expect, vi } from "vitest";
import { sendContactEmail } from "./contact";

// Mock Resend
vi.mock("resend", () => ({
  Resend: class {
    emails = {
      send: vi.fn().mockResolvedValue({ id: "test-id" }),
    };
  },
}));

describe("Contact Email", () => {
  it("should send contact email with correct data", async () => {
    const testData = {
      name: "John Doe",
      email: "john@example.com",
      phone: "555-1234",
      subject: "Equipment Rental",
      message: "I need sound equipment for my event",
    };

    const result = await sendContactEmail(testData);
    expect(result).toBeDefined();
  });

  it("should handle missing phone number", async () => {
    const testData = {
      name: "Jane Doe",
      email: "jane@example.com",
      subject: "Technical Support",
      message: "I have a question about your services",
    };

    const result = await sendContactEmail(testData);
    expect(result).toBeDefined();
  });
});
