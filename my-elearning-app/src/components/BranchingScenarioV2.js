import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/BranchingScenarioV2.css'; // Import the new CSS file

// Component for displaying the progress trail
const ProgressTrail = ({ history, handleBackStep }) => {
    const getDisplayText = (index, step) => {
        let displayText = `${index + 1}`;
        if (index >= 3) {
            const chosenPath = history.find((h) => h.chosen);
            if (chosenPath) {
                displayText = (
                    <>
                        {index + 1}
                        <span className="path-suffix">.{chosenPath.chosen}</span>
                    </>
                );
            }
        }
        return displayText;
    };

    return (
        <div className="progress-trail">
            {history.map((step, index) => {
                const isDarkGrey = index >= 3 && history[2].chosen;
                return (
                    <div key={index} className={`progress-step-container ${index % 2 === 0 ? 'above' : 'below'}`}>
                        <div 
                            className={`progress-step ${index === history.length - 1 ? 'active' : ''} ${step.chosen ? 'chosen' : 'unchosen'} ${isDarkGrey ? 'dark-grey' : ''} ${step.title === "Scenario Complete" ? 'final' : ''}`}
                            onClick={() => handleBackStep(index)}
                        >
                            {step.title === "Scenario Complete" ? "Scenario Complete" : getDisplayText(index, step)}
                        </div>
                        {(index < history.length - 1 || history[history.length - 1].title === step.title) && (
                            <div className={`progress-line ${index % 2 === 0 ? 'above' : 'below'}`}></div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

const BranchingScenarioV2 = () => {
    const [scenario, setScenario] = useState(null);
    const [currentStep, setCurrentStep] = useState(null);
    const [history, setHistory] = useState([]);
    const [numSteps, setNumSteps] = useState(0);

    const createSteps = (steps) => {
        let initialStep = {
            title: "Start",
            content: "You are at the beginning of the scenario.",
            choices: []
        };
        let current = initialStep;

        for (let i = 1; i <= steps; i++) {
            let nextStep;
            if (i === 3) { // Adjusted to make the choice at step 3
                nextStep = {
                    title: `Step ${i}`,
                    content: "This is step 3. You now need to decide whether to take path A or path B.",
                    choices: [
                        {
                            label: "Path A",
                            nextStep: {
                                title: `Step 4A`,
                                content: `You chose Path A. This is step 4A. Proceed to the next step.`,
                                choices: [
                                    {
                                        label: "Proceed",
                                        nextStep: {
                                            title: `Step 5A`,
                                            content: `This is step 5A. Continue to the next step.`,
                                            choices: [
                                                {
                                                    label: "Proceed",
                                                    nextStep: {
                                                        title: `Step 6A`,
                                                        content: `This is step 6A.`,
                                                        choices: [
                                                            {
                                                                label: "Proceed",
                                                                nextStep: {
                                                                    title: `Step 7A`,
                                                                    content: `This is step 7A.`,
                                                                    choices: [
                                                                        {
                                                                            label: "Proceed",
                                                                            nextStep: {
                                                                                title: "Scenario Complete",
                                                                                content: "You have completed the scenario.",
                                                                                choices: []
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            },
                            chosen: "A"
                        },
                        {
                            label: "Path B",
                            nextStep: {
                                title: `Step 4B`,
                                content: `You chose Path B. This is step 4B. Proceed to the next step.`,
                                choices: [
                                    {
                                        label: "Proceed",
                                        nextStep: {
                                            title: `Step 5B`,
                                            content: `This is step 5B. Continue to the next step.`,
                                            choices: [
                                                {
                                                    label: "Proceed",
                                                    nextStep: {
                                                        title: `Step 6B`,
                                                        content: `This is step 6B.`,
                                                        choices: [
                                                            {
                                                                label: "Proceed",
                                                                nextStep: {
                                                                    title: `Step 7B`,
                                                                    content: `This is step 7B.`,
                                                                    choices: [
                                                                        {
                                                                            label: "Proceed",
                                                                            nextStep: {
                                                                                title: "Scenario Complete",
                                                                                content: "You have completed the scenario.",
                                                                                choices: []
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            },
                            chosen: "B"
                        }
                    ]
                };
            } else {
                nextStep = {
                    title: `Step ${i}`,
                    content: `This is step ${i}.`,
                    choices: []
                };
            }
            current.choices.push({
                label: "Proceed",
                nextStep: nextStep
            });
            current = nextStep;
        }

        const finalStep = {
            title: "Scenario Complete",
            content: "You have completed the scenario.",
            choices: []
        };

        current.choices.push({
            label: "Complete",
            nextStep: finalStep
        });

        return initialStep;
    };

    const initializeScenario = (steps) => {
        const initialStep = createSteps(steps);
        setScenario(initialStep);
        setCurrentStep(initialStep);
        setHistory([initialStep]);
        setNumSteps(steps);
    };

    const handleChoice = (nextStep, chosenPath = null) => {
        if (chosenPath) {
            nextStep.chosen = chosenPath;
        }
        setCurrentStep(nextStep);
        setHistory([...history, nextStep]);
    };

    const handleBackStep = (index) => {
        setHistory(history.slice(0, index + 1));
        setCurrentStep(history[index]);
    };

    return (
        <div className="container mt-4">
            {scenario ? (
                <>
                    <h2>{currentStep.title}</h2>
                    <p>{currentStep.content}</p>
                    <div className="mt-3 button-container">
                        <button
                            className="btn btn-secondary me-2"
                            onClick={() => handleBackStep(history.length - 2)}
                            disabled={history.length <= 1}
                        >
                            Back
                        </button>
                        {currentStep.choices && currentStep.choices.length > 0 && currentStep.choices.map((choice, index) => (
                            <button
                                key={index}
                                className="btn btn-primary me-2"
                                onClick={() => handleChoice(choice.nextStep, choice.chosen)}
                            >
                                {choice.label}
                            </button>
                        ))}
                    </div>
                    <ProgressTrail history={history} handleBackStep={handleBackStep} />
                </>
            ) : (
                <>
                    <h2>Set Up Your Scenario</h2>
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Enter number of steps" 
                        onChange={(e) => initializeScenario(parseInt(e.target.value))}
                    />
                </>
            )}
        </div>
    );
};

export default BranchingScenarioV2;
