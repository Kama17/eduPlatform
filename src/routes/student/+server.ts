import db from '$lib/database.js';
import { type RequestHandler } from "@sveltejs/kit";


export const POST: RequestHandler = async ({request, cookies} ) => {
 // Access the request object
  const { itemId, isChecked } = await request.json(); // Parse the JSON body
  const userId: number = Number(cookies.get('user'))

  //Upsert the checkbox state
  const progress = await db.userProgress.upsert({
    where: {
      userId_itemId: { // Composite key name
        userId,
        itemId,
      },
    },
    update: { isChecked },
    create: { userId, itemId, isChecked },
  });

  return new Response(JSON.stringify(progress), { status: 200 });
}

export const GET: RequestHandler = async ({cookies} ) => {
  const userId: number = Number(cookies.get('user'))

  const progress = await db.userProgress.findMany({
    where: { userId },
  });

  return new Response(JSON.stringify(progress), { status: 200 });
}
