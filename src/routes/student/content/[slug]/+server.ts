
import { json } from '@sveltejs/kit';
import {contentMap} from '$lib/server/contentData'

export const GET = async ({ params }) => {
    try {
        const content = contentMap[params.slug]

        if (content) {
            return json({ content: content });
        } else {
            return json({ error: 'Content not found' }, { status: 404 });
        }
    } catch (error) {
        console.error('Error fetching content:', error);
        return json({ error: 'Failed to fetch content' }, { status: 500 });
    }
};
