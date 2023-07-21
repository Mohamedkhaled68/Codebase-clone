const mySteps = [
    {
        id: 1,
        imgUrl: "https://codebase-tech.com/wp-content/uploads/2022/08/step1.png",
        stepName: "Information gathering",
        title: "To go deeper into the business needs",
        points: [
            "First step is to gather all the necessary information about your project",
            "Analyze the client’s requirements",
            `Define the website purpose, identify the target audience`,
            `What kind of information they will be looking for on the website?`,
            "How can we facilitate it for them?",
            "So you can defiently reach your business goals by the aid of your website.",
        ],
    },
    {
        id: 2,
        imgUrl: "https://codebase-tech.com/wp-content/uploads/2022/08/step2.png",
        stepName: "Design",
        title: "After deeply analyzing the main topic areas of the website, sub-topics, content that will be on the website.",
        points: [
            "Journey on the website has to be as simple as possible for th future customers and for everyone who might use the website: No more unmet delivery deadlines. With high visibility on the status of your project, you will always be able to accurately predict the delivery date of your product.",
            "The content and design is directly interconnected with each other",
        ],
    },
    {
        id: 3,
        imgUrl: "https://codebase-tech.com/wp-content/uploads/2023/01/5.jpg",
        stepName: "Build",
        title: `While building the website -by coding all the previous approvals- we use our graceful metholodgy to consent with:

        `,
        points: [
            "Expected time, as we know from the first analysis how much time it may takes, we give you the accurately deadline.",
            `Your requirments, as every single step is done based on your requirment in coordenation with our expertise which will uide you to the best result.`,
            `Communication will defiently remain constant with you as you will need to see the changes applied to the website.`,
        ],
    },
    {
        id: 4,
        imgUrl: "https://codebase-tech.com/wp-content/uploads/2022/08/serv1.png",
        stepName: "Test",
        title: "Even if we have a 100% confidence in the website, it has nothing to do with the testing phase, as it’s one of the most important phases before launching, we test every single page to make sure that:",
        points: [
            "All links are working on their own purpose.",
            "Website is displayed correctly in different browsers and in various search engines.",
            "After launching – and analyzing the results – we have to apply a different test to make sure that the optimal combination is found and implented for your users.",
        ],
    },
];

export const steps = mySteps.map((item) => {
    if ((mySteps.indexOf(item) + 1) % 2 === 0) {
        return {
            ...item,
            style: "flex flex-col items-start lg:flex-row-reverse lg:justify-between lg:items-center gap-[3rem] mb-[5rem]",
        };
    } else {
        return {
            ...item,
            style: "flex flex-col items-start lg:flex-row lg:justify-between lg:items-center gap-[3rem] mb-[5rem]",
        };
    }
});
