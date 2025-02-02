<script lang="ts">
import { onMount } from "svelte";

import { stepSlug } from '$lib/stores';
import { CodeBranchOutline } from 'flowbite-svelte-icons';
import { Video , Heading, P } from 'flowbite-svelte'

let contentText: string;
let title: string;
let type: string;

 // Fetch content based on the slug
 const fetchContent = async (slug: string) => {
    try {

      const response = await fetch(`/student/content/${slug}`, { method: 'GET' });
      if (!response.ok) {
        throw new Error('Failed to fetch content');
      }

      const data = await response.json();
      contentText = data.content.content; // Set the fetched text
      title = data.content.title;
      type = data.content.type


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

  onMount(() => {
  // Handle zoom click
  function handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target || !target.classList.contains("zoomable")) return;

    // Get current zoom level or start at 1
    let zoomLevel = parseFloat(target.dataset.zoom || "1");

    if (!target.classList.contains("zoomed")) {
      zoomLevel = 2; // Start zoom at 200%
    } else {
      zoomLevel += 0.5; // Increase zoom on each click
      if (zoomLevel > 4) zoomLevel = 1; // Reset zoom if too big
    }

    target.dataset.zoom = zoomLevel.toString(); // Store zoom level

    // Apply zoom transformation
    if (zoomLevel > 1) {
      target.classList.add("zoomed", "cursor-zoom-out");
      target.style.transform = `translate(-50%, -50%) scale(${zoomLevel})`;
    } else {
      target.classList.remove("zoomed", "cursor-zoom-out");
      target.style.transform = "";
    }
  }

  // Handle outside click to reset zoom
  function handleOutsideClick(event: MouseEvent) {
    const zoomedImage = document.querySelector(".zoomed") as HTMLElement;
    if (zoomedImage && !zoomedImage.contains(event.target as Node)) {
      zoomedImage.classList.remove("zoomed", "cursor-zoom-out");
      zoomedImage.style.transform = "";
      zoomedImage.dataset.zoom = "1"; // Reset zoom level
    }
  }

  // Attach event listeners
  document.addEventListener("click", handleClick);
  document.addEventListener("click", handleOutsideClick, true);

  return () => {
    document.removeEventListener("click", handleClick);
    document.removeEventListener("click", handleOutsideClick, true);
  };
});
</script>

<div class="m-5 w-full h-full dark:bg-gray-900 flex justify-center items-center rounded"  style="min-height: 100vh;" >
  <P  class="custom-scrollbar text-sm dark:text-gray-400 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md mx-auto" style="max-height: 100vh; width: 100%; overflow-y: auto;">

        {#if type === "video"}
            <Video  class="rounded h-auto"  controls src={contentText} trackSrc={contentText} />
        {/if}

        {#if type === "text"}
        {@html contentText}

        {/if}
 </P>
</div>
