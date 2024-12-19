import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BranchingScenario = ({ scenario }) => {
    const [currentStep, setCurrentStep] = useState(scenario);

    const handleChoice = (nextStep) => {
        setCurrentStep(nextStep);
    };

    return (
        <div className="container mt-4">
            <h2>{currentStep.title}</h2>
            <p>{currentStep.content}</p>
            {currentStep.choices && currentStep.choices.length > 0 && (
                <div className="mt-3">
                    {currentStep.choices.map((choice, index) => (
                        <button
                            key={index}
                            className="btn btn-primary me-2"
                            onClick={() => handleChoice(choice.nextStep)}
                        >
                            {choice.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BranchingScenario;
