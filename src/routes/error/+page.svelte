<script lang="ts">
    import { Section, Page404 } from 'flowbite-svelte-blocks';
    import { Button } from 'flowbite-svelte';

    import { page } from '$app/stores';

    let code: string | null = $page.url.searchParams.get('code');
    let message: string = "Something went wrong"
    if(code === "400"){
        message = "Token is required"
    } else if( code === "401") {
        message = "Token is invalid"
    }

  </script>

  <Section name="page404">
    <Page404>
      <svelte:fragment slot="h1">{code}</svelte:fragment>
      <svelte:fragment slot="paragraph">
        <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Sorry!!</p>
        <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">{message}</p>
        <Button href="/" size="lg" color="red">Back to Homepage</Button>
      </svelte:fragment>
    </Page404>
  </Section>