<script lang="ts">
	import { Navbar, NavBrand, NavHamburger, NavLi, NavUl} from "flowbite-svelte";
	import logo from "$lib/images/logo.svg"
	import { page } from '$app/stores';

</script>

<Navbar class="dark:bg-gray-700 py-0">
	<NavBrand href="/">
	  <img src={logo} class="me-3 h-6 sm:h-9" alt="Learn2TradePro Logo" />
	  <span class="">Learn 2 Trade Pro</span>
	</NavBrand>
	<NavHamburger />
	<NavUl>
	  <NavLi href="/">Home</NavLi>
	  <NavLi href="/about">About</NavLi>
	  <NavLi href="/student">Centrun Studenta</NavLi>
    {#if $page.data.user}
	<form method="POST" action="/logout">
		<button type="submit">
			<NavLi>Log out</NavLi>
		</button>
	</form>
	<NavLi href="/faq">FAQ</NavLi>
    {/if}
	</NavUl>
  </Navbar>