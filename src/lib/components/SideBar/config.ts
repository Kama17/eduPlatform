export const config: {
    [level: string]: {
      Config: { buttonClass: string; groupBorderClass: string, checkBoxColor: "blue" | "red" | "green" | "purple" | "teal" | "yellow" | "orange" | "primary" | "secondary"; }; // Top-level Config for each level
      topics: {
        [topic: string]: {
          Config: { buttonClass: string; topicBorderClass: string }; // Config for each topic
          steps: { steps: string[] }[]; // Steps within each topic
        };
      };
    };
  } = {
    "Start": {
      Config: { buttonClass: "flex items-center p-2 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-blue-400",
                groupBorderClass: "border-2 rounded m-2 dark:border-blue-400 ", checkBoxColor: "blue" },
      topics: {
        "Witaj": {
          Config: { buttonClass: "bg-blue-400 hover:bg-red-500", topicBorderClass: "pt-1 mt-1 dark:border-blue-400" },
          steps: [
            { steps: ["Od czego zacząć?"] },
          ],
        },
      },
    },
    "Początkujący": {
      Config: { buttonClass: "flex items-center p-2 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-green-700",
                groupBorderClass: "border-2 rounded m-2 dark:border-green-700", checkBoxColor: "green" },
      topics: {
        "Konto brokerskie": {
          Config: { buttonClass: "bg-green-700 hover:bg-red-500", topicBorderClass: "pt-1 mt-1 dark:border-green-700" },
          steps: [
            { steps: ["Jak założyć konto", "step2"] },
            { steps: ["step3", "step4"] },
          ],
        },
        "Somethign": {
          Config: { buttonClass: "bg-green-700 hover:bg-red-500", topicBorderClass: "pt-1 mt-1 dark:border-green-700" },
          steps: [
            { steps: ["step1", "step2"] },
            { steps: ["step3", "step4"] },
          ],
        },
      },
    },
    "Średniozaawansowany": {
      Config: { buttonClass: "flex items-center p-2 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-yellow-400 dark:text-white dark:hover:yellow-400",
                groupBorderClass: "border-2 rounded m-2 dark:border-yellow-400",  checkBoxColor: "yellow" },
      topics: {
        "Solex": {
          Config: { buttonClass: "bg-yellow-400 hover:bg-red-500", topicBorderClass: "pt-1 mt-1 dark:border-yellow-400" },
          steps: [
            { steps: ["step1", "step2"] },
            { steps: ["step3", "step4"] },
          ],
        },
        "Somethign": {
          Config: { buttonClass: "bg-yellow-400 hover:bg-red-500", topicBorderClass: "pt-1 mt-1 dark:border-yellow-400" },
          steps: [
            { steps: ["step1", "step2"] },
            { steps: ["step3", "step4"] },
          ],
        },
      },
    },
    "Zaawansowany ": {
      Config: { buttonClass: "flex items-center p-2 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-red-500 dark:text-white dark:hover:red-500",
                groupBorderClass: "border-2 rounded m-2 dark:border-red-500",  checkBoxColor: "red" },
      topics: {
        "Solex": {
          Config: { buttonClass: "bg-red-500 hover:bg-red-500", topicBorderClass: "pt-1 mt-1 dark:border-red-500" },
          steps: [
            { steps: ["step1", "step2"] },
            { steps: ["step3", "step4"] },
          ],
        },
        "Somethign": {
          Config: { buttonClass: "bg-red-500 hover:bg-red-500", topicBorderClass: "pt-1 mt-1 dark:border-red-500" },
          steps: [
            { steps: ["step1", "step2"] },
            { steps: ["step3", "step4"] },
          ],
        },
      },
    },
  };
