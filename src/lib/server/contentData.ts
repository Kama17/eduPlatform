import formularz  from '$lib/images/formularz.jpg'

export const contentMap: {
    [key: string]: { title: string; type: string, content: string };
  } = {
    "startkontobrokerskiezałożeniekontabrokerskiego": {
      title: "Wybór i Rejestracja u Brokera",
      type: "text",
      content: `
   <div class="dark:text-gray-400 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
  <h2 class="mt-6 font-semibold text-xl text-center text-gray-900 dark:text-gray-100">
    KROK 1 - KONTO BROKERSKIE (broker)
  </h2>

  <p class="leading-relaxed mt-3">
    Aby zawierać transakcje na rynku, będziesz potrzebował platformy do handlowania, czyli <span class="font-medium">brokera</span>. Wybór brokera to Twoja indywidualna decyzja.
    Przy podejmowaniu decyzji warto wziąć pod uwagę takie kryteria, jak <span class="font-medium">opłaty transakcyjne</span>, regulacje prawne, dostępność wsparcia technicznego oraz opinie użytkowników.
    Możesz wybrać tego samego brokera, którego używamy, lub innego.
  </p>

  <p class="mt-4 leading-relaxed">
    Aby utworzyć konto u brokera, z którego ja korzystam, skorzystaj z poniższego linku. Weryfikacja konta trwa zazwyczaj <span class="font-medium">3 minuty</span>.
  </p>

  <a href="https://my.quomarkets.com/register?regnew=0192bfce-fd1d-71aa-bcaf-c9c95754fa0a" target="_blank"
     class="block mt-4 text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-500 text-center font-medium">
    🔗 Link do brokera
  </a>

  <!-- Krok 2 -->
  <h3 class="mt-6 font-semibold text-xl text-center text-gray-900 dark:text-gray-100">
    KROK 2 - WYPEŁNIJ FORMULARZ REJESTRACYJNY
  </h3>

  <p class="mt-3">Wypełnij formularz rejestracyjny swoimi danymi:</p>

  <ul class="list-disc pl-6 mt-2 space-y-1">
    <li>Imię i nazwisko</li>
    <li>Adres e-mail</li>
    <li>Numer telefonu</li>
    <li>Hasło (pamiętaj, aby było silne i unikalne)</li>
  </ul>

  <!-- Formularz Rejestracyjny Image -->
  <div class="flex justify-center mt-4">
    <img src=${formularz} alt="Formularz Rejestracyjny" class="w-48 h-80 rounded-md shadow-md">
  </div>

  <!-- Krok 3 -->
  <h3 class="mt-6 font-semibold text-xl text-center text-gray-900 dark:text-gray-100">
    KROK 3 - POTWIERDŹ SWÓJ ADRES E-MAIL
  </h3>

  <p class="mt-3 leading-relaxed">
    Po wypełnieniu formularza otrzymasz e-mail z linkiem aktywacyjnym. Kliknij w link, aby potwierdzić swój adres e-mail i aktywować konto.
  </p>

  <!-- Krok 4 -->
  <h3 class="mt-6 font-semibold text-xl text-center text-gray-900 dark:text-gray-100">
    KROK 4 - WERYFIKACJA TOŻSAMOŚCI
  </h3>

  <p class="mt-3 leading-relaxed">
    Po potwierdzeniu swojego adresu e-mail oraz zalogowaniu się do portalu, dokonaj <span class="font-medium">weryfikacji tożsamości</span> (zajmuje to ok. 3 minuty).
    Przygotuj dokumenty, takie jak dowód osobisty, paszport lub prawo jazdy, które mogą być wymagane do potwierdzenia Twojej tożsamości.
  </p>

  <p class="mt-3 leading-relaxed">
    Po pomyślnym zaakceptowaniu Twoich danych, Twój poziom weryfikacji zmieni się z <strong>LEVEL 0</strong> na <strong>LEVEL 1</strong>.
  </p>

  <!-- Krok 5 -->
  <h3 class="mt-6 font-semibold text-xl text-center text-gray-900 dark:text-gray-100">
    KROK 5 - TWOJE KONTO DEMO JEST GOTOWE
  </h3>

  <p class="mt-3 leading-relaxed">
    Twoje konto DEMO zostało pomyślnie otwarte, a jego dane wysłane na Twój adres e-mail. Konto DEMO pozwala na naukę i testowanie strategii bez ryzyka utraty pieniędzy.
  </p>

  <div class="mt-6 p-4 border-l-4 border-yellow-400 bg-yellow-100 text-gray-800 font-medium dark:bg-yellow-700 dark:text-gray-100">
    <strong>‼️ WAŻNE:</strong> Twój login i hasło do MT5 będą Ci potrzebne, dlatego zachowaj tę wiadomość e-mail.
  </div>
</div>

      `
    },
    "startkontobrokerskiecotojestkontoblokerskie": {
      title: "Po co name konto brokerskie",
      type: "video",
      content: "/Content/konto_brokerskie.MP4"
    },
    "startprogrammetetradercotojestmetatrader": {
      title: "Co to jest MetaTrader",
      type: "text",
      content: `
     <div class="dark:text-gray-400 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
  <p class="text-lg font-semibold mb-4">
    MetaTrader 5 (MT5) – Najpopularniejsza platforma transakcyjna
  </p>

  <p class="leading-relaxed">
    <span class="font-medium">MetaTrader 5 (MT5)</span> to jedna z najpopularniejszych platform transakcyjnych na świecie, umożliwiająca handel na rynku
    <span class="text-blue-600 dark:text-blue-400 font-medium">Forex</span>, kontraktach
    <span class="text-blue-600 dark:text-blue-400 font-medium">CFD</span> i innych instrumentach finansowych.
  </p>

  <p class="mt-3 leading-relaxed">
    Jest szeroko stosowana przez brokerów ze względu na swoją <span class="font-medium">niezawodność</span>, szeroką funkcjonalność oraz zgodność z wieloma systemami handlowymi.
    Dzięki temu traderzy mogą korzystać z jednej platformy niezależnie od wybranego brokera, co zwiększa <span class="font-medium">wygodę</span> i <span class="font-medium">elastyczność</span>.
  </p>
</div>

       `
    },
    "startprogrammetetraderinstalacjamt5": {
      title: "Instalacja MT5",
      type: "text",
      content: `
    <div class="dark:text-gray-400 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
  <p class="text-lg font-semibold mb-4">
    Aby pobrać i zainstalować MetaTrader 5, wykonaj następujące kroki:
  </p>

  <ol class="list-decimal list-inside space-y-2 pl-4">
    <li class="border-l-4 border-blue-500 pl-2">
      Przejdź na oficjalną stronę MetaTrader 5:
      <a href="https://www.metatrader5.com" target="_blank" class="text-blue-600 dark:text-blue-400 underline">https://www.metatrader5.com</a>
    </li>
    <li class="border-l-4 border-blue-500 pl-2">
      Pobierz wersję odpowiednią dla Twojego systemu operacyjnego
      (<span class="font-medium">Windows, macOS, Android, iOS</span>).
    </li>
    <li class="border-l-4 border-blue-500 pl-2">
      Uruchom pobrany plik i postępuj zgodnie z instrukcjami instalatora.
    </li>
    <li class="border-l-4 border-blue-500 pl-2">
      Po zakończeniu instalacji uruchom aplikację <span class="font-medium">MT5</span>.
    </li>
  </ol>
</div>

  `
    },
    "startprogrammetetraderpołączeniemt5zkontembrokerskim": {
      title: "Połączenie konta brokerskiego z MT5",
      type: "text",
      content: `
<div class="dark:text-gray-400 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
  <p class="text-lg font-semibold mb-4">
    Po zainstalowaniu MetaTrader 5 należy połączyć swoje konto brokerskie:
  </p>

  <ol class="list-decimal list-inside space-y-2 pl-4">
    <li class="border-l-4 border-blue-500 pl-2">Otwórz aplikację MT5.</li>
    <li class="border-l-4 border-blue-500 pl-2">Wybierz opcję <span class="font-medium">"Plik" → "Otwórz rachunek"</span>.</li>
    <li class="border-l-4 border-blue-500 pl-2">Wybierz odpowiedni serwer brokera (otrzymany w e-mailu od brokera) i kliknij <span class="font-medium">"OK"</span>. Jeśli serwer nie pojawia się na liście, spróbuj wpisać go ręcznie lub kliknij <span class="font-medium">"Dodaj nowy broker"</span>.</li>
    <li class="border-l-4 border-blue-500 pl-2">Wybierz <span class="font-medium">"Połącz się z istniejącym rachunkiem handlowym"</span>.</li>
    <li class="border-l-4 border-blue-500 pl-2">Wprowadź dane logowania (login, hasło i serwer) otrzymane w e-mailu od brokera.</li>
    <li class="border-l-4 border-blue-500 pl-2">
      Jeśli połączenie zostało ustanowione poprawnie, zobaczysz swoje saldo oraz możliwość składania zleceń. Jeśli połączenie nie powiodło się, sprawdź poprawność danych logowania i nazwę serwera.
    </li>
  </ol>

  <p class="mt-6 text-lg font-semibold text-green-500">
    Teraz jesteś gotowy do rozpoczęcia nauki i handlu na rynku Forex!
  </p>
</div>


  `
    }
  };