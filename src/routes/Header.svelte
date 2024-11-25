<script lang="ts">
	import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from "flowbite-svelte";
	import logo from '../lib/images/logo.svg'
	import { page } from '$app/stores';

//export const prerender = false;

</script>

<Navbar>
	<NavBrand href="/">
	  <img src={logo} class="me-3 h-6 sm:h-9" alt="Learn2TradePro Logo" />
	  <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Learn 2 Trade Pro</span>
	</NavBrand>
	<NavHamburger />
	<NavUl>
	  <NavLi href="/">Home</NavLi>
	  <NavLi href="/about">About</NavLi>
	  <NavLi href="/student">Student</NavLi>
	   <!-- Conditionally render "Log out" if user is logged in -->
    {#if $page.data.user}
	<form method="POST" action="/logout">
		<button type="submit">
			<NavLi>Log out</NavLi>
		</button>

	</form>
    {/if}
	</NavUl>
  </Navbar>