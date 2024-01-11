import React from "react";
import { Carousel } from "react-carousel-minimal"
import Cart from "./Cart";

function Home() {
  const data = [
    {
      image: "https://www.wraizwg.top/template/320/images/slideshow/01.jpg",
      caption: 'Mauris quis eros arcu'
    },
    {
      image: "https://www.wraizwg.top/template/320/images/slideshow/02.jpg",
      caption: "Cras porta porta turpis"
    },
    {
      image: "https://www.wraizwg.top/template/320/images/slideshow/03.jpg",
      caption: "Nullam ac mi id massa consectetur"
    },
    {
      image: "https://www.wraizwg.top/template/320/images/slideshow/04.jpg",
      caption: "Maecenas venenatis viverra nisi"
    },
    {
      image: "https://www.wraizwg.top/template/320/images/slideshow/05.jpg",
      caption: "Nunc sit amet tortor vitae arcu ultricies"
    }
  ];

  const captionStyle = {
    fontSize: '10px',
    fontWeight: 'thin',
    textAlign: 'left',
    backgroundColor: 'black',
    margin: '-30px 0px',
    padding: '10px 10px',
    background:'transpaarent'
  }
  return (
    <div className="App">
      <div сlassame='md:w-[700px]'>
        <div className="p-96 md:w-20" style={{
          padding: "0 40px",
          width: 'auto',
          height: 'auto',
        }}>
          <Carousel
            data={data}
            time={20000}
            width="760px"
            height="300px"
            captionStyle={captionStyle}
            radius="0px"
            slideNumber={false}
            captionPosition="bottom"
            pauseIconColor="white"
            pauseIconSize="400px"
            slideBackgroundColor="black"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="80px"
            style={{
              textAlign: "left",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
              border: '1px solid #4C4C4C',
              padding: '10px',
            }}
          />
        </div>
      </div>
      <Cart />
    </div>
  );
}

export default Home;