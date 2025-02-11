export const configEdu: {
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
    "Początkujący": {
      Config: { buttonClass: "flex items-center p-2 w-full text-sm font-bold dark:text-gray-400 rounded transition duration-75 group hover:bg-gray-100 dark:hover:bg-green-700 hover:dark:text-white",
                groupBorderClass: " rounded m-2 dark:border-green-700", checkBoxColor: "green", iconColor: "rgb(4, 108, 78)" },
      topics: {
        "Sygnały": {
          Config: { buttonClassOnClick: "dark:bg-green-700 dark:text-white", buttonClass: "hover:bg-green-700 hover:dark:text-white font-bold", topicBorderClass: "pt-1 mt-1 dark:border-green-700" },
          steps: [
            { steps: ["Co to jest sygnał"] }
          ],
        },
      },
    },
  }

export const getTotalStepsForAllLevelsEdu = () => {
  let totalSteps = 0;

  // Iterate through each level
  for (const level in configEdu) {
    const topics = configEdu[level].topics;

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
