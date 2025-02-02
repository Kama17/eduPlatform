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
    ClipboardSolid
  } from 'flowbite-svelte-icons';

  import SiderBarItemCustom from "$lib/components/SideBar/SiderBarItemCustom.svelte";
  import {userCurrentProgress} from '$lib/stores'

  let hiddenMobile = true; // State for Drawer visibility on mobile
  let mobilePlatform = false;
  let hiddenNormal = true; // State for Drawer visibility on larger screens
  let progressBarShow = true;

  let transitionParams = {
    x: -320,
    duration: 200,
  };
</script>

<!-- Hamburger Button: Visible only on small screens -->
<Button
  on:click={() => (hiddenMobile = false)}
  pill={true}
  class="!p-2 fixed bottom-14 right-2 md:hidden"
>
  <AlignJustifyOutline />
</Button>

<!-- Drawer: Visible only on small screens -->

<Drawer
  transitionType="fly"
  {transitionParams}
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
    <TabItem title="Edukacja" on:click={() => (mobilePlatform = false, progressBarShow = false)}>
      <div slot="title" class="flex items-center gap-2 font-bold">
        <ClipboardSolid size="md" />
        Edukacja
      </div>
    </TabItem>
  </Tabs>


    {#if mobilePlatform}
      <SiderBarItemCustom />
    {/if}


  <div hidden={progressBarShow} class="p-3 m-1 border rounded dark:border-gray-600">
    <Progressbar progress={userCurrentProgress.toString()} labelOutside="Progress" size="h-1.5" />
  </div>
</Drawer>

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
      on:click={() => (hiddenNormal = false, progressBarShow = false)}
    >
      <div slot="title" class="flex items-center gap-2 font-bold">
        <GlobeSolid size="md" />
        Platforma
      </div>
    </TabItem>
    <TabItem title="Edukacja" on:click={() => (hiddenNormal = true)}>
      <div slot="title" class="flex items-center gap-2 font-bold">
        <ClipboardSolid size="md" />
        Edukacja
      </div>
    </TabItem>
  </Tabs>


  <Drawer
    width="80"
    backdrop={false}
    activateClickOutside={false}
    transitionType="fly"
    {transitionParams}
    bind:hidden={hiddenNormal}
    style="position: relative !important; max-height: 75vh; overflow-y: auto;"
    class="custom-scrollbar rounded dark:bg-gray-900"
  >
    <SiderBarItemCustom />

  </Drawer>
</Sidebar>

<div hidden={progressBarShow} class="p-2 border rounded dark:border-gray-400 w-50 relative bottom-14">
  {#key $userCurrentProgress}
  <Progressbar progress={$userCurrentProgress.toString()}  labelOutside="Progress" size="h-1.5"
  precision={0}
  />
  {/key}
</div>

</div>
