<script lang="ts">
  import {
    Sidebar,
    Tabs, TabItem,
    Drawer,
    Button,
    Progressbar
  } from 'flowbite-svelte';

  import {
    AlignJustifyOutline,
    GlobeSolid,
    ClipboardSolid,

	CodeBranchOutline

  } from 'flowbite-svelte-icons';

  import SideBarPlatform from "$lib/components/SideBar/SideBarPlatform.svelte";
  import SideBarEdu from "$lib/components/SideBar/SideBarEdu.svelte";

  import {userCurrentProgress} from '$lib/stores'
	import { tick } from 'svelte';
	import { fly } from 'svelte/transition';


  let hiddenMobile = true; // State for Drawer visibility on mobile
  let mobilePlatform = false;
  let hiddenSideBarPlatform = true; // State for Drawer visibility on larger screens
  let hiddenSideBarEdu = true; // State for Drawer visibility on larger screens
  let progressBarShow = true;

  let transitionParamsPlatform = {
    x: -320,
    duration: 500,
  };

  let showPlatformTest = false;
  const toggleDrawers = async (showPlatform: boolean) => {
      showPlatformTest = showPlatform;
};

</script>

<!-- Hamburger Button: Visible only on small screens
<Button
  on:click={() => (hiddenMobile = false)}
  pill={true}
  class="!p-2 fixed bottom-14 right-2 md:hidden"
>
  <AlignJustifyOutline />
</Button>

Drawer: Visible only on small screens

<Drawer
  transitionType="fly"
  transitionParams = {transitionParamsPlatform}
  bind:hidden={hiddenMobile}
  class="custom-scrollbar">
  <Tabs
    tabStyle="underline"
    class="flex items-center justify-center"
    contentClass="bg-gray-50 rounded-lg dark:bg-gray-800 mt-1">

    <TabItem title="Platforma" on:click={() => (mobilePlatform = true, progressBarShow = false)}>

      <div slot="title" class="flex items-center gap-2 font-bold">
        <GlobeSolid size="md" />
        Platforma
      </div>
    </TabItem>
    <TabItem title="Edukacja" on:click={() => (mobilePlatform = true, progressBarShow = false)}>
      <div slot="title" class="flex items-center gap-2 font-bold">
        <ClipboardSolid size="md" />
        Edukacja
      </div>
    </TabItem>
  </Tabs>


    {#if mobilePlatform}
      <SideBarPlatform />
    {/if}


  <div hidden={progressBarShow} class="p-3 m-1 border rounded dark:border-gray-600">
    <Progressbar progress={userCurrentProgress.toString()} labelOutside="Progress" size="h-1.5" />
  </div>
</Drawer>

-->

<!-- Normal Sidebar: Visible only on medium and larger screens -->
<div class="static gray-text">
<Sidebar asideClass="w-64 hidden h-full md:block">
  <Tabs
    tabStyle="underline"
    class="flex items-center justify-center "
    contentClass="bg-gray-50 rounded-lg dark:bg-gray-800"
  >
    <TabItem
      title="Platforma"
      on:click={() => toggleDrawers(true)}
    >
      <div slot="title" class="flex items-center gap-2 font-bold">
        <GlobeSolid size="md" />
        Platforma
      </div>
    </TabItem>
    <TabItem title="Edukacja"
    on:click={() => toggleDrawers(false)}
      >
      <div slot="title" class="flex items-center gap-2 font-bold">
        <ClipboardSolid size="md" />
        Edukacja
      </div>
    </TabItem>
  </Tabs>


  {#if showPlatformTest}
	<div
		transition:fly="{transitionParamsPlatform}"
		on:introstart={()=>{hiddenSideBarEdu = true}}
		on:introend={async ()=>{
      await tick()
      hiddenSideBarPlatform = false}}
	>

  {#if !hiddenSideBarPlatform}
  <Drawer
  width="80"
  backdrop={false}
  activateClickOutside={false}
  transitionType="fly"
  transitionParams = {transitionParamsPlatform}
  bind:hidden={hiddenSideBarPlatform}
  style="position: relative !important; max-height: 75vh; overflow-y: auto;"
  class="custom-scrollbar rounded dark:bg-gray-900"
>

<SideBarPlatform />

  </Drawer>
{/if}
</div>
{/if}

{#if !showPlatformTest}
<div
transition:fly={transitionParamsPlatform}
on:introstart={()=>hiddenSideBarPlatform = true}
on:introend={ async ()=>{
    await tick();
    hiddenSideBarEdu = false}}
>

{#if !hiddenSideBarEdu}
<Drawer
width="80"
backdrop={false}
activateClickOutside={false}
transitionType="fly"
transitionParams = {transitionParamsPlatform}
bind:hidden={hiddenSideBarEdu}
style="position: relative !important; max-height: 75vh; overflow-y: auto;"
class="custom-scrollbar rounded dark:bg-gray-900"
>
<SideBarEdu />
</Drawer>
{/if}
</div>
{/if}

</Sidebar>

<div hidden={progressBarShow} class="p-2 border rounded dark:border-gray-400 w-50 relative bottom-14">
  {#key $userCurrentProgress}
  <Progressbar progress={$userCurrentProgress.toString()}  labelOutside="Progress" size="h-1.5"
  precision={0}
  />
  {/key}
</div>

</div>
