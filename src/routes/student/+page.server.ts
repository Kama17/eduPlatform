import { redirect } from '@sveltejs/kit';
export const prerender = false; // Disable prerendering for student
export const load = async ({ locals }) => {
    if (!locals.user) {
        throw redirect(303, '/login'); // Redirect to /login if user is not authenticated
    }
    return {
        user: locals.user,
    };
};

