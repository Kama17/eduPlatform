<script lang="ts">
  import {
    Sidebar,
    SidebarGroup,
    SidebarWrapper,
    SidebarDropdownItem,
    SidebarDropdownWrapper,
    Checkbox,
    Drawer,
    Button,
    CloseButton,
    Tabs, TabItem,
    Progressbar,
    SidebarItem
  } from 'flowbite-svelte';

  import { AlignJustifyOutline, UserSolid , ClipboardSolid, ChevronDoubleUpOutline, ChevronDoubleDownOutline, BookOpenSolid, FireSolid} from 'flowbite-svelte-icons';
  import SiderBarItemCustom from "$lib/components/SideBar/SiderBarItemCustom.svelte";
  export let videoLink = ''

  import { stepSlug } from '$lib/stores'; // Import the store

  let hiddenMobile = true; // State for Drawer visibility
  let hiddenNormal = true;
  let progressBarShow = true


  let transitionParams = {
    x: -320,
    duration: 200,
  };

  let activeItem = "";
  let openItem = ""

  const selectItem = (item: string, link: string, slugTxt: string) => {
    activeItem = item; // Update the active
    hiddenMobile = true; // Optional: Close the drawer on selection
    openItem = item.split(" - ")[0]; // "Instalacja MT5"
    videoLink = link;
    stepSlug.set(slugTxt)
    console.log(slugTxt)
  }
</script>

<!-- Hamburger Button: Visible only on small screens -->

  <Button on:click={() => (hiddenMobile = false)} pill={true} class="!p-2 fixed bottom-14 right-2 md:hidden">
    <AlignJustifyOutline />
  </Button>


<!-- Drawer: Visible only on small screens -->
<Drawer
  transitionType="fly"
  {transitionParams}
  bind:hidden={hiddenMobile}
  id="sidebar2"
  class="md:hidden"
>
  <div class="flex items-center">
    <h5
      id="drawer-navigation-label-3"
      class="text-gray-500 uppercase dark:text-gray-400"
    >
      Content
    </h5>
    <CloseButton
      on:click={() => (hiddenMobile = true)}
      class="mb-4 dark:text-white"
    />
  </div>

  <Sidebar>
    <SidebarWrapper divClass="overflow-y-auto rounded dark:bg-gray-800">
      <SidebarGroup>
        <SidebarDropdownWrapper label="Konto brokerskie" isOpen={openItem === "Konto brokerskie"}>

          <div class="flex items-center space-x-2">
            <SidebarDropdownItem
            activeClass="bg-gray-100"
            on:click={() => selectItem("Konto brokerskie - Krok 1", "", "konto-brokerskie-krok-1")}
            class={activeItem === "Konto brokerskie - Krok 1" ? "bg-red-500 dark:bg-red-700 hover:bg-red-500 dark:hover:bg-red-700" : ""}
            label="Krok 1"
            />
            <Checkbox  />
          </div>
          <div class="flex items-center space-x-2">
            <SidebarDropdownItem
            on:click={() => selectItem("Konto brokerskie - Krok 2", "", "konto-brokerskie-krok-2")}
            class={activeItem === "Konto brokerskie - Krok 2" ? "bg-red-500 dark:bg-red-700 hover:bg-red-500 dark:hover:bg-red-700" : ""}
            label="Krok 2" />
            <Checkbox  />
          </div>
          <div class="flex items-center space-x-2">
            <SidebarDropdownItem
            on:click={() => selectItem("Konto brokerskie - Krok 3", "", "")}
            class={activeItem === "Konto brokerskie - Krok 3" ? "bg-red-500 dark:bg-red-700 hover:bg-red-500 dark:hover:bg-red-700" : ""}
            label="Krok 3" />
            <Checkbox  />
          </div>
        </SidebarDropdownWrapper>

        <SidebarDropdownWrapper label="Instalacja MT5" isOpen={openItem === "Instalacja MT5"}>
          <div class="flex items-center space-x-2">
            <SidebarDropdownItem
            on:click={() => selectItem("Instalacja MT5 - Krok 1", "", "")}
            class={activeItem === "Instalacja MT5 - Krok 1" ? "bg-red-500 dark:bg-red-700 hover:bg-red-500 dark:hover:bg-red-700" : ""}
              label="Krok 1"/>
            <Checkbox  />
          </div>
          <div class="flex items-center space-x-2">
            <SidebarDropdownItem
            on:click={() => selectItem("Instalacja MT5 - Krok 2", "", "")}
            class={activeItem === "Instalacja MT5 - Krok 2" ? "bg-red-500 dark:bg-red-700 hover:bg-red-500 dark:hover:bg-red-700" : ""}
            label="Krok 2" />
            <Checkbox  />
          </div>
          <div class="flex items-center space-x-2">
            <SidebarDropdownItem
            on:click={() => selectItem("Instalacja MT5 - Krok 3", "", "")}
            class={activeItem === "Instalacja MT5 - Krok 3" ? "bg-red-500 dark:bg-red-700 hover:bg-red-500 dark:hover:bg-red-700" : ""}
            label="Krok 3" />
            <Checkbox  />
          </div>
        </SidebarDropdownWrapper>

        <SidebarDropdownWrapper label="Łączenie MT5 z blokerem" isOpen={openItem === "Łączenie MT5 z blokerem"}>
          <div class="flex items-center space-x-2">
            <SidebarDropdownItem
            on:click={() => selectItem("Łączenie MT5 z blokerem - Krok 1", "", "")}
            class={activeItem === "Łączenie MT5 z blokerem - Krok 1" ? "bg-red-500 dark:bg-red-700 hover:bg-red-500 dark:hover:bg-red-700" : ""}
              label="Krok 1"/>
            <Checkbox  />
          </div>
          <div class="flex items-center space-x-2">
            <SidebarDropdownItem
            on:click={() => selectItem("Łączenie MT5 z blokerem - Krok 2", "", "")}
            class={activeItem === "Łączenie MT5 z blokerem - Krok 2" ? "bg-red-500 dark:bg-red-700 hover:bg-red-500 dark:hover:bg-red-700" : ""}
            label="Krok 2" />
            <Checkbox  />
          </div>
          <div class="flex items-center space-x-2">
            <SidebarDropdownItem
            on:click={() => selectItem("Łączenie MT5 z blokerem - Krok 3", "", "")}
            class={activeItem === "Łączenie MT5 z blokerem - Krok 3" ? "bg-red-500 dark:bg-red-700 hover:bg-red-500 dark:hover:bg-red-700" : ""}
            label="Krok 3" />
            <Checkbox  />
          </div>
        </SidebarDropdownWrapper>

        <SidebarDropdownWrapper label="Sygnały" isOpen={openItem === "Sygnały"}>
          <div class="flex items-center space-x-2">
            <SidebarDropdownItem
            on:click={() => selectItem("Sygnały - Krok 1", "", "")}
            class={activeItem === "Sygnały - Krok 1" ? "bg-red-500 dark:bg-red-700 hover:bg-red-500 dark:hover:bg-red-700" : ""}
              label="Krok 1"/>
            <Checkbox  />
          </div>
          <div class="flex items-center space-x-2">
            <SidebarDropdownItem
            on:click={() => selectItem("Sygnały - Krok 2", "", "")}
            class={activeItem === "Sygnały - Krok 2" ? "bg-red-500 dark:bg-red-700 hover:bg-red-500 dark:hover:bg-red-700" : ""}
            label="Krok 2" />
            <Checkbox  />
          </div>
          <div class="flex items-center space-x-2">
            <SidebarDropdownItem
            on:click={() => selectItem("Sygnały - Krok 3", "", "")}
            class={activeItem === "Sygnały - Krok 3" ? "bg-red-500 dark:bg-red-700 hover:bg-red-500 dark:hover:bg-red-700" : ""}
            label="Krok 3" />
            <Checkbox  />
          </div>
        </SidebarDropdownWrapper>

      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
</Drawer>

<!-- Normal Sidebar: Visible only on medium and larger screens -->
<Sidebar asideClass="w-80">

      <Tabs tabStyle="underline" class="flex items-center justify-center" contentClass="bg-gray-50 rounded-lg dark:bg-gray-800 mt-1">
        <TabItem title="Platforma" on:click={() => (hiddenNormal = false, progressBarShow = false)}>
          <div slot="title" class="flex items-center gap-2">
            <UserSolid size="md" />
            Platforma
          </div>
        </TabItem>
        <TabItem title="Edukacja" on:click={() => (hiddenNormal = true)}>
          <div slot="title" class="flex items-center gap-2">
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
      style="position: relative !important; max-height: 100vh; overflow-y: auto;"
      class="custom-scrollbar h-screen">

      <SiderBarItemCustom/>

    </Drawer>
    <div hidden={progressBarShow} class="p-3 m-1 border rounded dark:border-gray-600 ">
      <Progressbar progress="50" labelOutside="Progress" size="h-1.5" />
    </div>

</Sidebar>
