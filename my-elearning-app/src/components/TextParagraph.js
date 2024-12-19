import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TextParagraph = ({ text }) => {
    return (
        <div className="container mt-4">
            <div className="row justify-content-start">
                <div className="col-md-8">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default TextParagraph;

