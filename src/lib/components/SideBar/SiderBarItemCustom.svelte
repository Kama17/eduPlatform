<script lang="ts">
import {
    SidebarGroup,
    SidebarDropdownItem,
    SidebarDropdownWrapper,
    Checkbox,
  } from 'flowbite-svelte';

  import {
    ChevronDoubleUpOutline,
    ChevronDoubleDownOutline,
    BookOpenSolid} from 'flowbite-svelte-icons';

  import { stepSlug } from '$lib/stores'; // Import the store
  import {config} from '$lib/components/SideBar/config'

  let activeItemSlug: string = ''
//
  const selectItem = (itemId: string) => {
    activeItemSlug = createSlug(itemId)
    stepSlug.set(activeItemSlug)
    console.log(activeItemSlug)
  }

  function createSlug(text: string): string {
  return text
    .toLowerCase()                           // Convert to lowercase
    .replace(/\s+/g, '-')                     // Replace spaces with hyphens
    //.replace(/[^\w\-]+/g, '')                 // Remove non-alphanumeric characters except hyphens
    .replace(/--+/g, '-')                     // Replace multiple hyphens with a single hyphen
    .replace(/^-+/, '')                       // Remove leading hyphens
    .replace(/-+$/, '');                      // Remove trailing hyphens
}

</script>

{#each Object.entries(config) as [level, levelDetails]}

<SidebarGroup class={levelDetails.Config.groupBorderClass}>
  <SidebarDropdownWrapper label={level} btnClass={levelDetails.Config.buttonClass}>
    <svelte:fragment slot="icon">
      <BookOpenSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    </svelte:fragment>
    <svelte:fragment slot="arrowup">
      <ChevronDoubleUpOutline class="w-6 h-6" />
    </svelte:fragment>
    <svelte:fragment slot="arrowdown">
      <ChevronDoubleDownOutline class="w-6 h-6" />
    </svelte:fragment>
  <SidebarGroup/>

{#each Object.entries(levelDetails.topics) as [topicName, topicsDetails]}
  <SidebarGroup border class={topicsDetails.Config.topicBorderClass}>
    <SidebarDropdownWrapper label={topicName}>
  {#each topicsDetails.steps as { steps }}
    {#each steps as step}
      <div class="flex items-center space-x-2">
        <SidebarDropdownItem
          on:click={() => selectItem(level + topicName + step)}
          class={activeItemSlug === createSlug(level + topicName + step) ? topicsDetails.Config.buttonClass : ""}
          label={step}/>
        <Checkbox color={levelDetails.Config.checkBoxColor}/>
      </div>
    {/each}
  {/each}
    </SidebarDropdownWrapper>
  </SidebarGroup>
{/each}
</SidebarDropdownWrapper>
</SidebarGroup>
{/each}

