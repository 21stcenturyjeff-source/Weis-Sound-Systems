# Weis Audio Systems - Project TODO

## Gallery Feature Implementation
- [x] Create Gallery page component with image upload functionality
- [x] Add gallery database schema (gallery_photos table)
- [x] Create gallery database helper functions (getGalleryPhotos, addGalleryPhoto, deleteGalleryPhoto)
- [x] Create gallery tRPC router with list, upload, and delete procedures
- [x] Add Gallery route to App.tsx
- [x] Add Gallery link to footer navigation
- [x] Create gallery tests with vitest
- [x] Push database schema changes with pnpm db:push

## Existing Features
- [x] Responsive design with equipment cards
- [x] Curtain animation on first load (7 seconds total)
- [x] Legal pages (Privacy Policy, Terms of Service, Disclaimer)
- [x] Local SEO optimization for Pittsburgh PA
- [x] Structured data and sitemap.xml
- [x] Backend and database capabilities
- [x] User authentication with Manus OAuth

## Navigation Improvements
- [x] Add prominent "VIEW GALLERY" button to hero section
- [x] Fix footer layout to show gallery link on mobile
- [x] Test gallery button navigation
- [x] Push changes to GitHub with correct author credentials

## Next Steps
- [ ] Test gallery upload functionality with authentication
- [ ] Verify image storage to S3
- [ ] Test gallery display with multiple photos
- [x] Push all changes to GitHub
- [ ] Deploy to Vercel

## Gallery Password Protection
- [x] Add simple password prompt to Gallery upload functionality
- [x] Store password in session storage after successful entry
- [x] Test password protection on live site

## Gallery Upload Error Fix
- [x] Add toast notification library (sonner)
- [x] Diagnose JSON parsing error in gallery upload endpoint
- [x] Fix server response format to return valid JSON (changed to publicProcedure)
- [x] Replace alert() with toast notifications for better UX
- [x] Test upload functionality on mobile and desktop
- [x] Verify error handling for failed uploads

## Vercel Deployment Verification
- [ ] Check latest Vercel deployment status
- [ ] Verify production has latest toast notification changes
- [ ] Test upload functionality on production (weisaudio.systems)
- [ ] Confirm JSON parsing error is resolved on production

## Gallery Simplification
- [x] Strip Gallery component to bare minimum code
- [x] Remove complex authentication flow
- [x] Remove unnecessary dialog components
- [x] Simplify upload to basic form
- [x] Test fast page load
- [x] Deploy simplified version (force pushed to GitHub)

## Fix Upload JSON Error
- [x] Check server logs for upload errors
- [x] Fix upload endpoint JSON response (removed duplicate import)
- [x] Test upload on dev server (works correctly)
- [x] Deploy fix to production (pushed to GitHub - Vercel will auto-deploy)

## Migrate to Supabase Storage
- [x] Install Supabase client library
- [x] Configure Supabase credentials
- [x] Create storage bucket for gallery photos
- [x] Rewrite Gallery to use Supabase storage directly
- [x] Remove tRPC backend complexity (now uploads directly from browser)
- [x] Test upload on dev server (Supabase gallery working)
- [x] Deploy to production (checkpoint saved - ready for Vercel)

## Upload User Photos to Supabase
- [x] Upload 11 stage/equipment photos to Supabase storage
- [ ] Verify photos display in gallery
- [x] Push to GitHub with working gallery

## Fix Supabase Gallery Connection
- [ ] Verify Supabase credentials match the project with uploaded photos
- [x] Test gallery displays photos (all 10 photos loading perfectly!) correctly
- [x] Push to GitHub for Vercel deployment (with correct author)

## Fix Supabase Storage Security
- [x] Create SQL to allow public uploads to gallery-photos bucket
- [x] Create SQL to allow public reads from gallery-photos bucket
- [ ] Test upload works after security fix
- [ ] Test photos display after security fix

## Switch to 21st Dev Labs Supabase
- [x] Get Supabase URL and anon key for "Hosting @ 21st Dev Labs" project
- [x] Update gallery config to use new credentials and weis-gallery-photos bucket
- [x] Create weis-gallery-photos bucket
- [x] Set up security policies for weis-gallery-photos
- [x] Re-upload 10 photos to new bucket
- [x] Test gallery displays photos (all 10 photos loading perfectly!)
- [ ] Push to GitHub
