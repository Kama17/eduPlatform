<script lang="ts">
import SideBar from "./SideBar.svelte";
import Content from "./Content.svelte";
import { stepSlug } from '$lib/stores';

</script>
<svelte:head>
	<title>Centrum Studenta</title>
	<meta name="description" content="Centrum Studenta" />
</svelte:head>


<div class="flex">
    <SideBar />
    {#key $stepSlug} <!-- Ensure that the content is re-rendered when slug changes -->
    <Content />
    {/key}
</div>

