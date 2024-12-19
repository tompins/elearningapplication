// src/pages/index.js
import Navigationbar from '../components/Navigationbar';
import TextParagraph from '../components/TextParagraph';
import ImageComponent from '../components/ImageComponent';
import VideoComponent from '../components/VideoComponent';
import AudioComponent from '../components/AudioComponent';
import CarouselComponent from '../components/CarouselComponent';

const HomePage = () => {
  return (
    <div>
      <Navigationbar />
      <h1>Welcome to the eLearning Module</h1>
      <TextParagraph text="This is a text paragraph component." />
      <ImageComponent src="/media/image1.jpg" alt="Sample Image" />
      <VideoComponent src="/media/ohmygiddyaunt.mp4" />
      <AudioComponent src="/media/beat.mp3" />
      <CarouselComponent images={[{ src: "/media/bike.png", alt: "Image 1" }, { src: "/media/banksy.png", alt: "Image 2" }, { src: "/media/agile.png", alt: "Image 2" }]} />
    </div>
  );
};

export default HomePage;
