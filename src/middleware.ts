import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define routes that should be public (accessible without login)
// We allow public access to almost everything for an e-commerce store (home, products, cart, etc.)
// We only protect specific routes if needed (like /admin, /profile)
const isPublicRoute = createRouteMatcher([
    '/(.*)', // Currently making everything public by default to avoid blocking customers
    '/sign-in(.*)'
])

const isProtectedRoute = createRouteMatcher([
    '/admin(.*)', // Example: Protect admin dashboard
    '/profile(.*)' // Example: Protect user profile
])

export default clerkMiddleware(async (auth, req) => {
    if (isProtectedRoute(req)) {
        await auth.protect()
    }
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}
