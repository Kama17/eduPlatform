<script lang="ts">
import { onMount } from "svelte";
import { Section, Faq, FaqItem } from "flowbite-svelte-blocks";
import noweKonto from '$lib/images/faq/noweKonto.jpg'

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

<Section name="faq">
  <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently asked questions</h2>
  <Faq>
    <div>
      <FaqItem>
        <svelte:fragment slot="h3">Jak założyć nowe konto na Quo Markets?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400"></p>
        <div class="flex justify-center mt-4">
          <img src={noweKonto} alt="Step one" class="w-75 h-80 rounded-md shadow-md zoomable transition-transform duration-300 cursor-zoom-in">
        </div>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">What does "lifetime access" exactly mean?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.</p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">How does support work?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">We're aware of the importance of well qualified support, that is why we decided that support will only be provided by the authors that actually worked on this project.</p>
        <p class="text-gray-500 dark:text-gray-400">
          Feel free to <a href="/" class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline" target="_blank" rel="noreferrer">contact us</a> and we'll help you out as soon as we can.
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">I want to build more than one project. Is that allowed?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">You can use Windster for an unlimited amount of projects, whether it's a personal website, a SaaS app, or a website for a client. As long as you don't build a product that will directly compete with Windster either as a UI kit, theme, or template, it's fine.</p>
        <p class="text-gray-500 dark:text-gray-400">
          Find out more information by <a href="/" class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">reading the license</a>.
        </p>
      </FaqItem>
    </div>
    <div>
      <FaqItem>
        <svelte:fragment slot="h3">What does "free updates" include?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          The free updates that will be provided is based on the <a href="/" class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">roadmap</a> that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">What does the free version include?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          The <a href="/" class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">free version</a> of Windster includes a minimal style guidelines, component variants, and a dashboard page with the mobile version alongside it.
        </p>
        <p class="text-gray-500 dark:text-gray-400">You can use this version for any purposes, because it is open-source under the MIT license.</p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">What is the difference between Windster and Tailwind UI?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">Although both Windster and Tailwind UI are built for integration with Tailwind CSS, the main difference is in the design, the pages, the extra components and UI elements that Windster includes.</p>
        <p class="text-gray-500 dark:text-gray-400">Additionally, Windster is a project that is still in development, and later it will include both the application, marketing, and e-commerce UI interfaces.</p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">Can I use Windster in open-source projects?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">Generally, it is accepted to use Windster in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to Windster itself.</p>
        <p class="text-gray-500 dark:text-gray-400">With that being said, feel free to use this design kit for your open-source projects.</p>
        <p class="text-gray-500 dark:text-gray-400">
          Find out more information by <a href="/" class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">reading the license</a>.
        </p>
      </FaqItem>
    </div>
  </Faq>
</Section>