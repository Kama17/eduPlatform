import { redirect } from '@sveltejs/kit';
export const prerender = false;
export const load = async ({ locals }) => {
    if (locals.user) {
        throw redirect(303, '/student'); // Redirect logged-in users to the /student page
    }

    return {}; // Allow unauthenticated users to access the login page
};

