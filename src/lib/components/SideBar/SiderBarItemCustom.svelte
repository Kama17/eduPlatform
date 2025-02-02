<script lang="ts">

import { onMount } from 'svelte';
import { writable } from 'svelte/store';

import {
    SidebarGroup,
    SidebarDropdownItem,
    SidebarDropdownWrapper,
    Checkbox,
  } from 'flowbite-svelte';

  import {
    ChevronDoubleUpOutline,
    ChevronDoubleDownOutline,
    ChevronUpOutline,
    ChevronDownOutline,
    UserSolid} from 'flowbite-svelte-icons';

  import { stepSlug, userCurrentProgress } from '$lib/stores'; // Import the store
  import {config, getTotalStepsForAllLevels} from '$lib/components/SideBar/config'


  let activeItemSlug: string = ''
  let userProgress: number = 0
  let totalProgress: number = getTotalStepsForAllLevels()

  const selectItem = (itemId: string) => {
    activeItemSlug = createSlug(itemId)
    stepSlug.set(activeItemSlug)
  }

  function createSlug(text: string): string {
  return text
    .toLowerCase()                           // Convert to lowercase
    .replace(/\s+/g, '')                     // Replace spaces with hyphens
    .replace(/--+/g, '-')                     // Replace multiple hyphens with a single hyphen
    .replace(/^-+/, '')                       // Remove leading hyphens
    .replace(/-+$/, '');                      // Remove trailing hyphens
}

interface Progress {
  itemId: string;
  isChecked: boolean;
}

let checkboxes = writable<{ [key: string]: boolean }>({});

  // Fetch initial checkbox states
  onMount(async () => {
    const response = await fetch('/student');
    const data: Progress[] = await response.json();

    const formattedData = data.reduce((acc: { [key: string]: boolean }, { itemId, isChecked }) => {
    acc[itemId] = isChecked; // Map itemId to isChecked
    if(isChecked)
    userProgress++
    return acc;
  }, {});

  // Set the formatted data to the checkboxes store
  checkboxes.set(formattedData);
  $userCurrentProgress = Math.ceil( (userProgress/totalProgress) * 100)
  });

  // Update checkbox state in the database
  async function toggleCheckbox(itemId: string, isChecked: boolean) {
    await fetch('/student', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ itemId, isChecked }),
    });
    // Update the store
    if(isChecked)
      userProgress++
    else
      userProgress--

      $userCurrentProgress = Math.ceil( (userProgress/totalProgress) * 100)
  }

</script>

{#each Object.entries(config) as [level, levelDetails]}

<SidebarGroup class={levelDetails.Config.groupBorderClass}>
  <SidebarDropdownWrapper label={level} btnClass=" dark:text-gray-400 {levelDetails.Config.buttonClass}">
    <svelte:fragment slot="icon">
      <UserSolid color={levelDetails.Config.iconColor} class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    </svelte:fragment>
    <svelte:fragment slot="arrowup">
      <ChevronDoubleUpOutline />
    </svelte:fragment>
    <svelte:fragment slot="arrowdown">
      <ChevronDoubleDownOutline />
    </svelte:fragment>
  <SidebarGroup/>

{#each Object.entries(levelDetails.topics) as [topicName, topicsDetails]}
  <SidebarGroup border class={topicsDetails.Config.topicBorderClass}>
    <SidebarDropdownWrapper label={topicName} class="dark:text-gray-400 text-sm {topicsDetails.Config.buttonClass}">
      <svelte:fragment slot="arrowup">
        <ChevronUpOutline />
      </svelte:fragment>
      <svelte:fragment slot="arrowdown">
        <ChevronDownOutline />
      </svelte:fragment>
  {#each topicsDetails.steps as { steps }}
    {#each steps as step}
      <div class="flex items-center justify-between space-x-1">
        <li class="ps-1 w-full">
        <SidebarDropdownItem
          on:click={() => selectItem(level + topicName + step)}
          class="{`dark:text-gray-400 text-sm ${activeItemSlug === createSlug(level + topicName + step) ? topicsDetails.Config.buttonClassOnClick : ''}`}"
          label={step}/>
        </li>
          <Checkbox id={createSlug(level + topicName + step)} checked={$checkboxes[createSlug(level + topicName + step)]} on:change={(e) => toggleCheckbox(createSlug(level + topicName + step), (e.target as HTMLInputElement).checked)} class={levelDetails.Config.checkBoxColor}/>
      </div>
    {/each}
  {/each}
    </SidebarDropdownWrapper>
  </SidebarGroup>
{/each}
</SidebarDropdownWrapper>
</SidebarGroup>
{/each}