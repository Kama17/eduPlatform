import jwt from 'jsonwebtoken';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const JWT_SECRET = 'your-secret-key';

export const load: PageServerLoad = async ({url }) => {

    const token = url.searchParams.get('token');

    if (!token) {
        new Response(JSON.stringify({ message: 'Token is required' }), { status: 400 });
        throw redirect(303, '/error?code=400');
      }

   try {

    jwt.verify(token, JWT_SECRET);

    let data = jwt.decode(token)

    return data

  } catch (error) {
    throw redirect(303, `/error?code=401`);
  }

};