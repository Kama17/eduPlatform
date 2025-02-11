<script lang="ts">
	import { Navbar, NavBrand, NavHamburger, NavLi, NavUl} from "flowbite-svelte";
	import logo from "$lib/images/logo.svg"
	import { page } from '$app/stores';

</script>

<Navbar class="dark:bg-gray-900 py-0">
	<NavBrand href="/">
	  <span class="text-xl font-bold p-3">Learn 2 Trade Pro</span>
	</NavBrand>
	<NavHamburger />
	<NavUl>
    {#if $page.data.user}
	<NavLi href="/student">Centrun Studenta</NavLi>
	<form method="POST" action="/logout">
		<button type="submit">
			<NavLi>Wyloguj</NavLi>
		</button>
	</form>
	<NavLi href="/faq">FAQ</NavLi>
    {/if}
	</NavUl>
  </Navbar>