import React from 'react';
import Navigationbar from '../components/Navigationbar';
import TextParagraph from '../components/TextParagraph';
import ImageComponent from '../components/ImageComponent';
import VideoComponent from '../components/VideoComponent';
import AudioComponent from '../components/AudioComponent';
import CarouselComponent from '../components/CarouselComponent';
import QuestionComponent from '../components/QuestionComponent';
import BranchingScenario from '../components/BranchingScenario';
import BranchingScenarioV2 from '../components/BranchingScenarioV2';
import courseContent from '../courseContent.json';
import scenario from '../scenarios'; // Ensure this path is correct
console.log(scenario);

const HomePage = () => {
    const renderComponent = (component, index) => {
        switch (component.type) {
            case 'text':
                return (
                    <div key={index} className="full-width-bg bg-section-1">
                        <div className="container mt-4">
                            <h1>{component.content}</h1>
                        </div>
                    </div>
                );
            case 'paragraph':
                return (
                    <div key={index} className="full-width-bg bg-section-2">
                        <div className="container mt-4">
                            <TextParagraph text={component.content} />
                        </div>
                    </div>
                );
            case 'image':
                return (
                    <div key={index} className="full-width-bg bg-section-3">
                        <div className="container mt-4 universalpadding">
                            <ImageComponent
                                src={component.src}
                                alt={component.alt}
                                title={component.title}
                                subtitle={component.subtitle}
                            />
                        </div>
                    </div>
                );
            case 'video':
                return (
                    <div key={index} className="full-width-bg bg-section-4 videostyle">
                        <div className="container mt-4">
                            <VideoComponent
                                src={component.src}
                                title={component.title}
                                subtitle={component.subtitle}
                            />
                        </div>
                    </div>
                );
            case 'audio':
                return (
                    <div key={index} className="full-width-bg bg-section-1">
                        <div className="container mt-4 universalpadding">
                            <AudioComponent src={component.src} />
                        </div>
                    </div>
                );
            case 'carousel':
                return (
                    <div key={index} className="full-width-bg bg-section-2">
                        <div className="container mt-4">
                            <CarouselComponent images={component.images} />
                        </div>
                    </div>
                );
            case 'question':
                return (
                    <div key={index} className="full-width-bg bg-section-3">
                        <div className="container mt-4 universalpadding">
                            <h1>{component.question}</h1>
                            <QuestionComponent
                                question={component.question}
                                choices={component.choices}
                                correctAnswer={component.correctAnswer}
                            />
                        </div>
                    </div>
                );
            case 'scenario':
                return (
                    <div key={index} className="full-width-bg bg-section-4 universalpadding">
                        <div className="container mt-4">
                            <BranchingScenario scenario={component.scenario} />
                        </div>
                    </div>
                );
            case 'scenarioV2':
                return (
                    <div key={index} className="full-width-bg bg-section-4 universalpadding">
                        <div className="container mt-4">
                            <BranchingScenarioV2 scenario={component.scenario} />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <Navigationbar />
            {courseContent.course.map((component, index) => renderComponent(component, index))}
        </div>
    );
};

export default HomePage;
