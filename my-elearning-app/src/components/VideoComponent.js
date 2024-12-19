import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VideoComponent = ({ src, title, subtitle }) => {
    return (
        <div className="container mt-4">
            <div className="row justify-content-start">
                <div className="col-md-8">
                    {title && <h2>{title}</h2>}
                    {subtitle && <h5>{subtitle}</h5>}
                    <video controls className="w-100 rounded">
                        <source src={src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default VideoComponent;


