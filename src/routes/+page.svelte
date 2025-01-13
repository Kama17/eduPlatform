<script lang="ts">
	import { Button, ImagePlaceholder,Footer, FooterCopyright, FooterLinkGroup, FooterLink, Tooltip, Card  } from 'flowbite-svelte'
	import { Section, ArticleAuthor, ArticleBody, ArticleHead, ArticleWrapper, BlogHead, BlogBodyWrapper } from 'flowbite-svelte-blocks';
	import { VideoCameraSolid, ArrowRightOutline, NewspaperSolid } from 'flowbite-svelte-icons';
	import me from '$lib/images/me.jpg'

</script>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home" />
</svelte:head>



<div class="container mx-auto p-3 bg-white dark:text-gray-300 dark:bg-gray-800 shadow-lg rounded-lg flex flex-col md:flex-row items-center">
	<div class="w-fulltext-center  md:w-1/3 mb-6 md:mb-0 md:mr-6">
		<img src={me} alt="Zdjęcie" class="rounded-lg shadow-lg">
	</div>
	<div class="w-full md:w-2/3 px-10">
		<h1 class="mt-3 text-3xl font-bold text-center dark:text-gray-300" style="color: rgb(239,86,47,1);">Witaj! Nazywam się Karolina Kuchnia</h1>
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
			<Button pill={true}>Dołącz teraz!</Button>
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
				<FooterLink href="/">
				  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
					<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
				  </svg>
				  <span class="sr-only">Github</span>
				</FooterLink>
				<Tooltip placement="bottom">Star us on GitHub</Tooltip>
				<FooterLink href="/">
				  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
					<path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" />
				  </svg>
				  <span class="sr-only">Dribbble</span>
				</FooterLink>
				<Tooltip placement="bottom">Follow us on Dribbble</Tooltip>
			  </FooterLinkGroup>
			</Footer>
		  </Section>
	</div>
</div>

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



