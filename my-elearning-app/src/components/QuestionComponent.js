import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuestionComponent = ({ question, choices = [], correctAnswer }) => {
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = () => {
        if (selectedAnswer === correctAnswer) {
            setFeedback('Correct!');
        } else {
            setFeedback('Incorrect, try again.');
        }
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{question}</h2>
                    {choices.map((choice, index) => (
                        <div key={index} className="form-check">
                            <input 
                                type="radio" 
                                id={choice} 
                                name="choices" 
                                value={choice}
                                className="form-check-input"
                                onChange={() => setSelectedAnswer(choice)} 
                            />
                            <label htmlFor={choice} className="form-check-label">{choice}</label>
                        </div>
                    ))}
                    <button className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>
                    {feedback && <p className="mt-2">{feedback}</p>}
                </div>
            </div>
        </div>
    );
};

export default QuestionComponent;



