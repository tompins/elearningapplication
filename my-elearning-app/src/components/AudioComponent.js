import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AudioComponent = ({ src }) => {
    return (
        <div className="container mt-4">
            <audio controls className="w-100">
                <source src={src} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default AudioComponent;
