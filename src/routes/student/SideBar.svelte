<script>
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
  } from 'flowbite-svelte';
  import { AlignJustifyOutline, UserSolid } from 'flowbite-svelte-icons';

  let hidden2 = true; // State for Drawer visibility
  let transitionParams = {
    x: -320,
    duration: 200,
  };
</script>

<!-- Hamburger Button: Visible only on small screens -->

  <Button on:click={() => (hidden2 = false)} pill={true} class="!p-2 fixed bottom-14 right-2 md:hidden">
    <AlignJustifyOutline />
  </Button>


<!-- Drawer: Visible only on small screens -->
<Drawer
  transitionType="fly"
  {transitionParams}
  bind:hidden={hidden2}
  id="sidebar2"
  class="md:hidden"
>
  <div class="flex items-center">
    <h5
      id="drawer-navigation-label-3"
      class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
    >
      Content
    </h5>
    <CloseButton
      on:click={() => (hidden2 = true)}
      class="mb-4 dark:text-white"
    />
  </div>

  <Sidebar>
    <SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
      <SidebarGroup>
        <SidebarDropdownWrapper label="Student 1">
          <svelte:fragment slot="icon">
            <UserSolid
              class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />
          </svelte:fragment>
          <div class="flex items-center space-x-2">
            <SidebarDropdownItem
              on:click={() => (hidden2 = true)}
              label="Krok 1"
            />
            <Checkbox color="green" />
          </div>
          <div class="flex items-center space-x-2">
            <SidebarDropdownItem label="Krok 2" />
            <Checkbox color="green" />
          </div>
          <div class="flex items-center space-x-2">
            <SidebarDropdownItem label="Krok 3" />
            <Checkbox color="green" />
          </div>
        </SidebarDropdownWrapper>

        <SidebarDropdownWrapper label="Student 2">
          <svelte:fragment slot="icon">
            <UserSolid
              class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />
          </svelte:fragment>
          <div class="flex items-center space-x-2">
            <SidebarDropdownItem
              on:click={() => (hidden2 = true)}
              label="Krok 1"
            />
            <Checkbox color="green" />
          </div>
          <div class="flex items-center space-x-2">
            <SidebarDropdownItem label="Krok 2" />
            <Checkbox color="green" />
          </div>
          <div class="flex items-center space-x-2">
            <SidebarDropdownItem label="Krok 3" />
            <Checkbox color="green" />
          </div>
        </SidebarDropdownWrapper>

        <SidebarDropdownWrapper label="Student 3">
          <svelte:fragment slot="icon">
            <UserSolid
              class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />
          </svelte:fragment>
          <div class="flex items-center space-x-2">
            <SidebarDropdownItem
              on:click={() => (hidden2 = true)}
              label="Krok 1"
            />
            <Checkbox color="green" />
          </div>
          <div class="flex items-center space-x-2">
            <SidebarDropdownItem label="Krok 2" />
            <Checkbox color="green" />
          </div>
          <div class="flex items-center space-x-2">
            <SidebarDropdownItem label="Krok 3" />
            <Checkbox color="green" />
          </div>
        </SidebarDropdownWrapper>

      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
</Drawer>

<!-- Normal Sidebar: Visible only on medium and larger screens -->
<Sidebar class="hidden md:block">
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarDropdownWrapper label="Student 1">
        <svelte:fragment slot="icon">
          <UserSolid
            class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          />
        </svelte:fragment>
        <div class="flex items-center space-x-2">
          <SidebarDropdownItem
            on:click={() => (hidden2 = true)}
            label="Krok 1"
          />
          <Checkbox color="green" />
        </div>
        <div class="flex items-center space-x-2">
          <SidebarDropdownItem label="Krok 2" />
          <Checkbox color="green" />
        </div>
        <div class="flex items-center space-x-2">
          <SidebarDropdownItem label="Krok 3" />
          <Checkbox color="green" />
        </div>
      </SidebarDropdownWrapper>

      <SidebarDropdownWrapper label="Student 2">
        <svelte:fragment slot="icon">
          <UserSolid
            class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          />
        </svelte:fragment>
        <div class="flex items-center space-x-2">
          <SidebarDropdownItem
            on:click={() => (hidden2 = true)}
            label="Krok 1"
          />
          <Checkbox color="green" />
        </div>
        <div class="flex items-center space-x-2">
          <SidebarDropdownItem label="Krok 2" />
          <Checkbox color="green" />
        </div>
        <div class="flex items-center space-x-2">
          <SidebarDropdownItem label="Krok 3" />
          <Checkbox color="green" />
        </div>
      </SidebarDropdownWrapper>

      <SidebarDropdownWrapper label="Student 3">
        <svelte:fragment slot="icon">
          <UserSolid
            class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          />
        </svelte:fragment>
        <div class="flex items-center space-x-2">
          <SidebarDropdownItem
            on:click={() => (hidden2 = true)}
            label="Krok 1"
          />
          <Checkbox color="green" />
        </div>
        <div class="flex items-center space-x-2">
          <SidebarDropdownItem label="Krok 2" />
          <Checkbox color="green" />
        </div>
        <div class="flex items-center space-x-2">
          <SidebarDropdownItem label="Krok 3" />
          <Checkbox color="green" />
        </div>
      </SidebarDropdownWrapper>

    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
