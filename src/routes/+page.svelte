<script lang="ts">
	import { Button, ImagePlaceholder,Footer, FooterLinkGroup, FooterLink, Tooltip, Modal, Label, Input, Textarea } from 'flowbite-svelte'
	import { Section, ArticleAuthor, ArticleBody, ArticleHead, ArticleWrapper, BlogHead, BlogBodyWrapper } from 'flowbite-svelte-blocks';
	import { VideoCameraSolid, ArrowRightOutline, NewspaperSolid } from 'flowbite-svelte-icons';
	import me from '$lib/images/me.jpg'


	let formModal = false;

</script>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home" />
</svelte:head>



<div class="container mx-auto p-6 mt-5 mb-5 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 shadow-xl rounded-2xl flex flex-col md:flex-row items-center gap-8">
	<div class="w-full text-center  md:w-2/3 mb-6 md:mb-0 md:mr-6">
		<img src={me} alt="Zdjęcie" class="rounded-lg shadow-lg">
	</div>
	<div class="w-full md:w-2/3 px-10">
		<h1 class="mt-3 pb-5 text-3xl font-bold text-center dark:text-gray-300" style="color: rgb(239,86,47,1);">Witaj! Nazywam się Karolina Kuchnia</h1>
		<h2 class="text-2xl font-bold text-green-500 dark:text-green-400 mb-4" style="color: rgb(239,86,47,1);">Kim jestem?</h2>
		<p class="leading-relaxed">
			Jestem pasjonatem rynku forex i tradingu, z wieloletnim doświadczeniem w tej dziedzinie. Moim celem jest pomaganie innym w osiągnięciu finansowej niezależności oraz rozwijaniu umiejętności inwestycyjnych. Pracuję z osobami, które chcą nauczyć się skutecznego handlu na rynkach finansowych i budować stabilną przyszłość.
		</p>

		<h2 class="text-2xl font-bold text-green-500 dark:text-green-400 mt-6 mb-4" style="color: rgb(239,86,47,1);">Dlaczego warto dołączyć do mojego zespołu?</h2>
		<p class="leading-relaxed">
			Wspólnie możemy osiągnąć sukces! W moim zespole znajdziesz:
		</p>
		<ul class="list-disc list-inside">
			<li>Indywidualne wsparcie i mentoring</li>
			<li>Dostęp do sprawdzonych strategii tradingowych</li>
			<li>Materiały edukacyjne i szkolenia dostosowane do Twojego poziomu</li>
			<li>Inspirującą społeczność osób o podobnych celach</li>
		</ul>

		<h2 class="text-2xl font-bold text-green-500 dark:text-green-400 mt-6 mb-4" style="color: rgb(239,86,47,1);">Co oferuję?</h2>
		<p class="leading-relaxed">
			Każdy nowy członek zespołu otrzymuje:
		</p>
		<ul class="list-disc list-inside">
			<li>Darmowe konsultacje na start</li>
			<li>Wsparcie w wyborze odpowiedniego brokera</li>
			<li>Pomoc w budowie indywidualnego planu tradingowego</li>
			<li>Regularne spotkania online i wymianę doświadczeń</li>
		</ul>

		<div class="text-center mt-8">
			<Button pill={true} on:click={() => (formModal = true)}>Dołącz teraz!</Button>
		</div>
		<Section>
			<Footer>
			  <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 mr-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
				<FooterLink href="/">
				  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
				</FooterLink>
				<Tooltip placement="bottom">Like us on Facebook</Tooltip>
				<FooterLink href="/">
				  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
				  </svg>
				  <span class="sr-only">Twitter</span>
				</FooterLink>
				<Tooltip placement="bottom">Like us on Twitter</Tooltip>
			  </FooterLinkGroup>
			</Footer>
		  </Section>
	</div>
</div>

<!--
<Section name="blog" sectionClass="relative py-6 sm:py-10 mt-5">
	<BlogHead>
	  <svelte:fragment slot="h2">Moj Studenci</svelte:fragment>
	  <svelte:fragment slot="paragraph">
		<p class="font-light text-gray-500 sm:text-xl dark:text-gray-400 p-3">Moi studenci osiągają sukcesy na rynku forex i cieszą się stabilnymi dochodami. Wspólnie rozwijamy ich umiejętności, budujemy pewność siebie i pomagamy w realizacji finansowych celów. Możesz być jednym z nich!</p>
	  </svelte:fragment>
	</BlogHead>
	<BlogBodyWrapper>
	  <ArticleWrapper>
		<ArticleHead>
		  <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
			<VideoCameraSolid size="xs" class="mr-1" />
			Tutorial
		  </span>
		  <span class="text-sm">14 days ago</span>
		</ArticleHead>
		<ArticleBody>
		  <svelte:fragment slot="h2"><a href="/">How to quickly deploy a static website</a></svelte:fragment>
		  <svelte:fragment slot="paragraph">
			<p class="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
		</svelte:fragment>
		</ArticleBody>
		<ArticleAuthor>
		  <svelte:fragment slot="author">
			<img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
			<span class="font-medium dark:text-white"> Jese Leos </span>
		  </svelte:fragment>
		  <a href="/" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
			Read more
			<ArrowRightOutline size="sm" class="ml-2" />
		  </a>
		</ArticleAuthor>

	  </ArticleWrapper>

	  <ArticleWrapper>
		<ArticleHead>
		  <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
			<NewspaperSolid size="xs" class="mr-1" />
			Article
		  </span>
		  <span class="text-sm">14 days ago</span>
		</ArticleHead>
		<ArticleBody>
		  <svelte:fragment slot="h2"><a href="/">Our first project with React</a><ImagePlaceholder/></svelte:fragment>
		  <svelte:fragment slot="paragraph">
			<p class="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
		  </svelte:fragment>
		</ArticleBody>
		<ArticleAuthor>
		  <svelte:fragment slot="author">
			<img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" />
			<span class="font-medium dark:text-white"> Bonnie Green </span>
		  </svelte:fragment>
		  <a href="/" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
			Read more
			<ArrowRightOutline size="sm" class="ml-2" />
		  </a>
		</ArticleAuthor>
	  </ArticleWrapper>
	</BlogBodyWrapper>
  </Section>

-->
  <Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
	<form class="flex flex-col space-y-6" action="#">
	  <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Wyślij zapytanie</h3>
	  <Label class="space-y-2">
		<span>Email</span>
		<Input type="email" name="email" placeholder="name@company.com" required />
	  </Label>
	  <Label class="space-y-2">
		<span>Imię</span>
		<Input  required />
	  </Label>
	  <Label class="space-y-2"><span>Twoja wiadomość</span>
		<Textarea  placeholder="Twoja wiadomość" rows={4} name="message" />
	  </Label>
	  <Button type="submit" class="w-full1">Submit</Button>
	</form>
  </Modal>



