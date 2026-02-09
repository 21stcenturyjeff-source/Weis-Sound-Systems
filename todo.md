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
- [x] Push to GitHub (Vercel deploying now)

## Gallery UX Improvements
- [x] Move upload section to bottom of page (photos displayed first)

## Content and Layout Updates
- [x] Update equipment text from "Yamaha mixers" to "Yamaha and Midas mixers"
- [x] Fix phone number in footer to stay on one line (no wrapping on mobile)

## Equipment Cards and Curtain Timing
- [x] Prevent equipment card titles from wrapping (add whitespace-nowrap)
- [x] Reduce curtain pause from 3 seconds to 2 seconds before /home redirect

## Gallery Lightbox Feature
- [x] Add full-screen lightbox modal for gallery photos
- [x] Implement pinch-to-zoom functionality
- [x] Add close button (X) and back button navigation
- [x] Test on mobile and desktop

## Contact Page and Email
- [x] Create contact page with email form
- [x] Set up email sending to Markweis@protonmail.com via Resend
- [x] Update "CONTACT US NOW" button to link to contact page
- [x] Add contact route to App.tsx

## Favicon and Error Suppression
- [x] Add favicon.ico, favicon.png, and apple-touch-icon.png
- [x] Add favicon links to index.html
- [x] Suppress tRPC auth errors in console (no tRPC server on Vercel)

## Phone Number Formatting
- [x] Auto-format phone input to (123) 456-7890 pattern
- [x] Display formatted phone in email template with clickable tel: link

## Contact Form Field Updates
- [x] Make Phone required
- [x] Add Date of Event field
- [x] Add Venue For Event field
- [x] Add Name Of Band field (optional)
- [x] Move Subject to top of form
- [x] Update email template with new fields
