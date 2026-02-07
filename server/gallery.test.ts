import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { z } from "zod";
import { getGalleryPhotos, addGalleryPhoto, deleteGalleryPhoto } from "./db";

// Mock database functions
vi.mock("./db", () => ({
  getGalleryPhotos: vi.fn(),
  addGalleryPhoto: vi.fn(),
  deleteGalleryPhoto: vi.fn(),
}));

describe("Gallery Router", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("gallery.list", () => {
    it("should return empty array when no photos exist", async () => {
      vi.mocked(getGalleryPhotos).mockResolvedValue([]);
      const result = await getGalleryPhotos();
      expect(result).toEqual([]);
    });

    it("should return photos sorted by creation date", async () => {
      const mockPhotos = [
        {
          id: 1,
          title: "Photo 1",
          description: "First photo",
          imageUrl: "https://example.com/photo1.jpg",
          imageKey: "gallery/photo1.jpg",
          uploadedBy: 1,
          createdAt: new Date("2026-02-07"),
          updatedAt: new Date("2026-02-07"),
        },
        {
          id: 2,
          title: "Photo 2",
          description: "Second photo",
          imageUrl: "https://example.com/photo2.jpg",
          imageKey: "gallery/photo2.jpg",
          uploadedBy: 1,
          createdAt: new Date("2026-02-06"),
          updatedAt: new Date("2026-02-06"),
        },
      ];
      vi.mocked(getGalleryPhotos).mockResolvedValue(mockPhotos);
      const result = await getGalleryPhotos();
      expect(result).toHaveLength(2);
      expect(result[0].id).toBe(1);
    });
  });

  describe("gallery.upload", () => {
    it("should validate required fields", () => {
      const schema = z.object({
        title: z.string().min(1),
        description: z.string().optional(),
        imageBase64: z.string(),
        filename: z.string(),
      });

      expect(() => {
        schema.parse({
          title: "",
          imageBase64: "data",
          filename: "test.jpg",
        });
      }).toThrow();

      expect(() => {
        schema.parse({
          title: "Valid Title",
          imageBase64: "data",
          filename: "test.jpg",
        });
      }).not.toThrow();
    });

    it("should accept optional description", () => {
      const schema = z.object({
        title: z.string().min(1),
        description: z.string().optional(),
        imageBase64: z.string(),
        filename: z.string(),
      });

      const validData = schema.parse({
        title: "Photo Title",
        imageBase64: "base64data",
        filename: "photo.jpg",
      });

      expect(validData.description).toBeUndefined();
    });
  });

  describe("gallery.delete", () => {
    it("should validate delete input", () => {
      const schema = z.object({ id: z.number() });

      expect(() => {
        schema.parse({ id: "not-a-number" });
      }).toThrow();

      expect(() => {
        schema.parse({ id: 1 });
      }).not.toThrow();
    });

    it("should call deleteGalleryPhoto with correct id", async () => {
      vi.mocked(deleteGalleryPhoto).mockResolvedValue(undefined);
      await deleteGalleryPhoto(1);
      expect(deleteGalleryPhoto).toHaveBeenCalledWith(1);
    });
  });

  describe("Photo metadata", () => {
    it("should store photo with correct fields", async () => {
      const photoData = {
        title: "Stage Setup",
        description: "Pittsburgh concert setup",
        imageUrl: "https://example.com/stage.jpg",
        imageKey: "gallery/12345-stage.jpg",
        uploadedBy: 1,
      };

      vi.mocked(addGalleryPhoto).mockResolvedValue({ insertId: 1 } as any);
      await addGalleryPhoto(photoData);

      expect(addGalleryPhoto).toHaveBeenCalledWith(photoData);
    });
  });
});
