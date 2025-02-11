export const configPlatform: {
    [level: string]: {
      Config: { buttonClass: string; groupBorderClass: string, checkBoxColor: string, iconColor: string }; // Top-level Config for each level
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
                groupBorderClass: "rounded m-2 dark:border-blue-400 ", checkBoxColor: "dark:text-gray-400  pe-3 cursor-pointer", iconColor: "rgb(118, 169, 250)" },
      topics: {
        "Witaj": {
          Config: { buttonClassOnClick: "dark:bg-blue-400 dark:text-white", buttonClass: "hover:dark:bg-blue-400 hover:dark:text-white font-bold ", topicBorderClass: "pt-1 mt-1 dark:border-blue-400" },
          steps: [
            { steps: ["Video"] },
          ],
        },
        "Konto brokerskie": {
          Config: { buttonClassOnClick: "dark:bg-blue-400 dark:text-white", buttonClass: "hover:dark:bg-blue-400 hover:dark:text-white font-bold", topicBorderClass: "pt-1 mt-1 dark:border-blue-400" },
          steps: [
            { steps: ["Co to jest konto blokerskie", "Założenie konta brokerskiego"] }
          ],
        },
        "Program MeteTrader5": {
          Config: { buttonClassOnClick: "dark:bg-blue-400 dark:text-white", buttonClass: "hover:dark:bg-blue-400 hover:dark:text-white font-bold", topicBorderClass: "pt-1 mt-1 dark:border-blue-400" },
          steps: [
            { steps: ["Co to jest MetaTrader", "Instalacja MT5", "Połączenie MT5 z kontem brokerskim"] }
          ],
        },
        "Aplikacja Solexx": {
          Config: { buttonClassOnClick: "dark:bg-blue-400 dark:text-white", buttonClass: "hover:dark:bg-blue-400 hover:dark:text-white font-bold", topicBorderClass: "pt-1 mt-1 dark:border-blue-400" },
          steps: [
            { steps: ["Co to jest Solexx", "Edukatorzy"] }
          ],
        },
      },
    },
  }

export const getTotalStepsForAllLevelsPlatform = () => {
  let totalSteps = 0;

  // Iterate through each level
  for (const level in configPlatform) {
    const topics = configPlatform[level].topics;

    // Iterate through each topic in the level
    for (const topic in topics) {
      const stepsArray = topics[topic].steps;

      // Sum the steps for each topic
      for (const step of stepsArray) {
        totalSteps += step.steps.length;
      }
    }
  }

  return totalSteps;
};
