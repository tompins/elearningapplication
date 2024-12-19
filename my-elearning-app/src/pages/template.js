// pages/template.js
import TextParagraph from '../components/TextParagraph';
import ImageComponent from '../components/ImageComponent';
import VideoComponent from '../components/VideoComponent';
import AudioComponent from '../components/AudioComponent';
import CarouselComponent from '../components/CarouselComponent';

const TemplatePage = () => {
  return (
    <div>
      <TextParagraph text="Welcome to the eLearning module!" />
      <ImageComponent src="/path/to/image.jpg" alt="Description of image" />
      <VideoComponent src="/path/to/video.mp4" />
      <AudioComponent src="/path/to/audio.mp3" />
      <CarouselComponent images={[{src: "/path/to/image1.jpg", alt: "Image 1"}, {src: "/path/to/image2.jpg", alt: "Image 2"}]} />
    </div>
  );
};

export default TemplatePage;
