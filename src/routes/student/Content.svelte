<script lang="ts">

import { stepSlug } from '$lib/stores';
import { CodeBranchOutline } from 'flowbite-svelte-icons';
import { Video , Heading, P } from 'flowbite-svelte'

let contentText: string;
let title: string;
let type: string;

 // Fetch content based on the slug
 const fetchContent = async (slug: string) => {
    try {

        // Check if content is already in localStorage
    const cachedContent = localStorage.getItem(slug);
    if (cachedContent) {
      // If cached, parse and return it

      //console.log("cachedContent", cachedContent)
      //let cached =  JSON.parse(cachedContent);
      //title = cached.title
      //contentText = cached.content
    }

      const response = await fetch(`/student/content/${slug}`, { method: 'GET' });
      if (!response.ok) {
        throw new Error('Failed to fetch content');
      }
      else{
        console.log("FEATVHEED")
      }

      const data = await response.json();
      contentText = data.content.content; // Set the fetched text
      title = data.content.title;
      type = data.content.type

      // Cache the fetched content in localStorage
   // localStorage.setItem(slug, JSON.stringify({
     // slug: data.content.slug,
     // title: title,
      //content: contentText
    //}));

    } catch (error) {
      console.error('Error fetching content:', error);
      contentText = ''; // Set empty text in case of error
    }
  };

  // Reactive block to fetch content when slug changes
  $: {
    if ($stepSlug) {
      fetchContent($stepSlug); // Fetch content whenever the slug changes
    }
  }

</script>
<div class="p-5 w-full dark:bg-gray-800 flex justify-center items-center"  style=" min-height: 100vh;" >

        {#if type === "video"}
            <Video  class="rounded w-3/4 h-auto"  controls src={contentText} trackSrc={contentText} />
        {/if}

        {#if type === "text"}
            <P  class="custom-scrollbar text-sm" style="max-height: 100vh; overflow-y: auto;">
                {@html contentText}
            </P>
        {/if}

  </div>
