<script>
	import { goto } from '$app/navigation';
  import { Sidebar, SidebarGroup, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper, Checkbox } from 'flowbite-svelte';
  import {  UserSolid } from 'flowbite-svelte-icons';

   async function handleLogout() {

      // Send a POST request to logout
      await fetch('/logout', {
        method: 'POST',
      })
      await goto("/")
   };

 </script>
<div class="bg-white dark:bg-gray-800">
 <Sidebar>
   <SidebarWrapper>
     <SidebarGroup>
       <SidebarDropdownWrapper label="Student 1">
         <svelte:fragment slot="icon">
          <UserSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
         </svelte:fragment>
         <div class="flex items-center space-x-2">
          <SidebarDropdownItem label="Krok 1" />
          <Checkbox color='green'/>
        </div>
        <div class="flex items-center space-x-2">
          <SidebarDropdownItem label="Krok 2" />
          <Checkbox color='green'/>
        </div>
        <div class="flex items-center space-x-2">
          <SidebarDropdownItem label="Krok 3" />
          <Checkbox color='green'/>
        </div>
       </SidebarDropdownWrapper>

       <SidebarDropdownWrapper label="Student 2">
        <svelte:fragment slot="icon">
          <UserSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
        <div class="flex items-center space-x-2">
          <SidebarDropdownItem label="Krok 1" />
          <Checkbox color='green'/>
        </div>
        <div class="flex items-center space-x-2">
          <SidebarDropdownItem label="Krok 2" />
          <Checkbox color='green'/>
        </div>
        <div class="flex items-center space-x-2">
          <SidebarDropdownItem label="Krok 3" />
          <Checkbox color='green'/>
        </div>
      </SidebarDropdownWrapper>

      <SidebarDropdownWrapper label="Student 3">
        <svelte:fragment slot="icon">
          <UserSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
        <div class="flex items-center space-x-2">
          <SidebarDropdownItem label="Krok 1" />
          <Checkbox color='green'/>
        </div>
        <div class="flex items-center space-x-2">
          <SidebarDropdownItem label="Krok 2" />
          <Checkbox color='green'/>
        </div>
        <div class="flex items-center space-x-2">
          <SidebarDropdownItem label="Krok 3" />
          <Checkbox color='green'/>
        </div>

      </SidebarDropdownWrapper>

       </SidebarGroup>
   </SidebarWrapper>
 </Sidebar>
</div>