import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const ImageComponent = ({ src, title, subtitle, alt }) => {
    console.log('Props:', { src, title, subtitle, alt }); // Log props for debugging

    return (
        <div className="container mt-4">
            <div className="row justify-content-start">
                <div className="col-md-8">
                    {title && <h2>{title}</h2>}
                    {subtitle && <h5>{subtitle}</h5>}
                    <img src={src} alt={alt} className="img-fluid rounded imagestyle" />
                </div>
            </div>
        </div>
    );
};

export default ImageComponent;


