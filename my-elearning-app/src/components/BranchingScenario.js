import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BranchingScenario = ({ scenario }) => {
    const [currentStep, setCurrentStep] = useState(scenario);
    const [history, setHistory] = useState([scenario]);

    const handleChoice = (nextStep) => {
        setCurrentStep(nextStep);
        setHistory([...history, nextStep]);
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
            <div className="progress mt-4">
                {history.map((step, index) => (
                    <div
                        key={index}
                        className={`progress-bar ${index === history.length - 1 ? 'bg-info' : 'bg-secondary'}`}
                        style={{ width: `${100 / history.length}%` }}
                    >
                        Step {index + 1}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BranchingScenario;
