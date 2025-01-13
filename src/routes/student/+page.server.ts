import { redirect } from '@sveltejs/kit';
export const prerender = false; // Disable prerendering for student
export const load = async ({ locals ,  setHeaders}) => {
    if (!locals.user) {
        throw redirect(303, '/login'); // Redirect to /login if user is not authenticated
    }

    setHeaders({
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400', // Cache for 1 hour, stale for 1 day
      });

    return {
        user: locals.user,
    };
};

