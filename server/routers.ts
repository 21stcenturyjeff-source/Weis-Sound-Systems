import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { getGalleryPhotos, addGalleryPhoto, deleteGalleryPhoto } from "./db";
import { storagePut } from "./storage";
import { COOKIE_NAME } from "@shared/const";
import { sendContactEmail } from "./contact";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  gallery: router({
    list: publicProcedure.query(async () => {
      const photos = await getGalleryPhotos();
      return photos;
    }),
    upload: publicProcedure
      .input(z.object({
        title: z.string().min(1),
        description: z.string().optional(),
        imageBase64: z.string(),
        filename: z.string(),
      }))
      .mutation(async ({ input, ctx }) => {
        const buffer = Buffer.from(input.imageBase64, 'base64');
        const fileKey = `gallery/${Date.now()}-${Math.random().toString(36).substring(7)}-${input.filename}`;
        const { url } = await storagePut(fileKey, buffer, 'image/jpeg');
        
        await addGalleryPhoto({
          title: input.title,
          description: input.description,
          imageUrl: url,
          imageKey: fileKey,
          uploadedBy: ctx.user?.id || 1,
        });
        
        return { success: true, url };
      }),
    delete: publicProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input, ctx }) => {
        await deleteGalleryPhoto(input.id);
        return { success: true };
      }),
  }),

  contact: router({
    sendEmail: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().optional(),
        subject: z.string().min(1),
        message: z.string().min(1),
      }))
      .mutation(async ({ input }) => {
        await sendContactEmail(input);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
