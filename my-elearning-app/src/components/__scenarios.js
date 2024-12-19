// scenarios.js
const scenario = {
    title: "Welcome to the Scenario",
    content: "You are at a crossroads. Which path will you take?",
    choices: [
        {
            label: "Take the left path",
            nextStep: {
                title: "Left Path",
                content: "You took the left path and found a peaceful meadow.",
                choices: [
                    {
                        label: "Rest in the meadow",
                        nextStep: {
                            title: "Resting",
                            content: "You rest and enjoy the peaceful surroundings."
                        }
                    },
                    {
                        label: "Continue walking",
                        nextStep: {
                            title: "Walking",
                            content: "You continue walking and encounter a river."
                        }
                    }
                ]
            }
        },
        {
            label: "Take the right path",
            nextStep: {
                title: "Right Path",
                content: "You took the right path and found a dense forest.",
                choices: [
                    {
                        label: "Explore the forest",
                        nextStep: {
                            title: "Exploring",
                            content: "You explore the forest and find a hidden cave."
                        }
                    },
                    {
                        label: "Turn back",
                        nextStep: {
                            title: "Turning Back",
                            content: "You decide to turn back and return to the crossroads."
                        }
                    }
                ]
            }
        }
    ]
};

export default scenario;
