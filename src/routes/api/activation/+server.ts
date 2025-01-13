import type { RequestHandler } from '@sveltejs/kit';
import db  from '$lib/database'; // Update with your actual database import

export const POST: RequestHandler = async ({ request }) => {

    try {
        const data = await request.formData();
        const email = data.get('email') as string | null;
        const password = data.get('password') as string | null;
        const confirmPassword = data.get('confirm-password') as string | null;

        // Validate inputs
        if (!email || !password || !confirmPassword) {
            return new Response('Email, password, and confirm-password are required', { status: 400 });
        }

        if (password !== confirmPassword) {
            return new Response('Passwords do not match', { status: 400 });
        }

        // Check if the user already exists
        const user = await db.user.findUnique({
            where: { email },
        });

        if (user) {
            return new Response('User already exists', { status: 403 });
        }


        // Create a new user
        await db.user.create({
            data: {
                email: email,
                password: password,
                active: 'yes',
            },
        });

        const userActivated = await db.user.findUnique({
            where: {email : email}
        })

        if(userActivated) {

            await db.userDetails.create({
                data: {
                    userId: userActivated.id
                }
            })
        }

        return new Response('User created successfully', { status: 201 });
    } catch (error) {
        console.error('Error during user activation:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
};
