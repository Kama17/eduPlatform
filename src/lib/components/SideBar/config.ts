export const config: {
    [level: string]: {
      Config: { buttonClass: string; groupBorderClass: string, checkBoxColor: string; }; // Top-level Config for each level
      topics: {
        [topic: string]: {
          Config: { buttonClassOnClick: string, buttonClass: string; topicBorderClass: string }; // Config for each topic
          steps: { steps: string[] }[]; // Steps within each topic
        };
      };
    };
  } = {
    "Start": {
      Config: { buttonClass: "flex items-center p-2 w-full text-sm font-bold rounded  transition duration-75 group hover:bg-gray-100 dark:hover:bg-blue-400 hover:dark:text-white",
                groupBorderClass: "rounded m-2 dark:border-blue-400 ", checkBoxColor: "dark:text-gray-400  pe-3 cursor-pointer" },
      topics: {
        "Witaj": {
          Config: { buttonClassOnClick: "dark:bg-blue-400 dark:text-white", buttonClass: "hover:dark:bg-blue-400 hover:dark:text-white", topicBorderClass: "pt-1 mt-1 dark:border-blue-400" },
          steps: [
            { steps: ["Video"] },
          ],
        },
        "Konto brokerskie": {
          Config: { buttonClassOnClick: "dark:bg-blue-400 dark:text-white", buttonClass: "hover:dark:bg-blue-400 hover:dark:text-white", topicBorderClass: "pt-1 mt-1 dark:border-blue-400" },
          steps: [
            { steps: ["Co to jest konto blokerskie", "Założenie konta brokerskiego"] }
          ],
        },
        "Program MeteTrader": {
          Config: { buttonClassOnClick: "dark:bg-blue-400 dark:text-white", buttonClass: "hover:dark:bg-blue-400", topicBorderClass: "pt-1 mt-1 dark:border-blue-400" },
          steps: [
            { steps: ["Co to jest MetaTrader", "Instalacja MT5", "Połączenie MT5 z kontem brokerskim"] }
          ],
        },
        "Aplikacja Solexx": {
          Config: { buttonClassOnClick: "dark:bg-blue-400 dark:text-white", buttonClass: "hover:dark:bg-blue-400 hover:dark:text-white", topicBorderClass: "pt-1 mt-1 dark:border-blue-400" },
          steps: [
            { steps: ["Co to jest Solexx", "Instalacja", "Kogo sledzic"] }
          ],
        },
      },
    },
    "Początkujący": {
      Config: { buttonClass: "flex items-center p-2 w-full text-sm font-bold dark:text-gray-400 rounded transition duration-75 group hover:bg-gray-100 dark:hover:bg-green-700 hover:dark:text-white",
                groupBorderClass: " rounded m-2 dark:border-green-700", checkBoxColor: "green" },
      topics: {
        "Sygnały": {
          Config: { buttonClassOnClick: "dark:bg-green-700 dark:text-white", buttonClass: "hover:bg-green-700 hover:dark:text-white", topicBorderClass: "pt-1 mt-1 dark:border-green-700" },
          steps: [
            { steps: ["Co to jest sygnał"] }
          ],
        },
      },
    },
  }
  /*
    "Początkujący": {
      Config: { buttonClass: "flex items-center p-2 w-full text-base font-bold text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-green-700",
                groupBorderClass: " rounded m-2 dark:border-green-700", checkBoxColor: "green" },
      topics: {
        "Konto": {
          Config: { buttonClass: "dark:bg-green-700 hover:bg-red-500", topicBorderClass: "pt-1 mt-1 dark:border-green-700" },
          steps: [
            { steps: ["Jak założyć konto", "Instalacja MT5", "Podłączenie kontal brokerskiego z MT5", "Połączenie konta brokerskiego z kontem MT5"] }
          ],
        },
        "Somethign": {
          Config: { buttonClass: "dark:bg-green-700 hover:bg-red-500", topicBorderClass: "pt-1 mt-1 dark:border-green-700" },
          steps: [
            { steps: ["step1", "step2"] },
            { steps: ["step3", "step4"] },
          ],
        },
      },
    },
    "Średniozaawansowany": {
      Config: { buttonClass: "flex items-center p-2 w-full text-base font-bold text-gray-900  transition duration-75 group hover:bg-yellow-400 dark:text-white dark:hover:yellow-400",
                groupBorderClass: "rounded m-2 dark:border-yellow-400",  checkBoxColor: "yellow" },
      topics: {
        "Solex": {
          Config: { buttonClass: "dark:bg-yellow-400 hover:bg-red-500", topicBorderClass: "pt-1 mt-1 dark:border-yellow-400" },
          steps: [
            { steps: ["step1", "step2"] },
            { steps: ["step3", "step4"] },
          ],
        },
        "Somethign": {
          Config: { buttonClass: "dark:bg-yellow-400 hover:bg-red-500", topicBorderClass: "pt-1 mt-1 dark:border-yellow-400" },
          steps: [
            { steps: ["step1", "step2"] },
            { steps: ["step3", "step4"] },
          ],
        },
      },
    },
    "Zaawansowany ": {
      Config: { buttonClass: "flex items-center p-2 w-full text-base font-bold text-gray-900  transition duration-75 group hover:bg-red-500 dark:text-white dark:hover:red-500",
                groupBorderClass: " rounded m-2 dark:border-red-500",  checkBoxColor: "red" },
      topics: {
        "Solex": {
          Config: { buttonClass: "dark:bg-red-500 hover:bg-red-500", topicBorderClass: "pt-1 mt-1 dark:border-red-500" },
          steps: [
            { steps: ["step1", "step2"] },
            { steps: ["step3", "step4"] },
          ],
        },
        "Somethign": {
          Config: { buttonClass: "dark:bg-red-500 hover:bg-red-500", topicBorderClass: "pt-1 mt-1 dark:border-red-500" },
          steps: [
            { steps: ["step1", "step2"] },
            { steps: ["step3", "step4"] },
          ],
        },
      },
    },
  };
*/