import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from "react";
export default function MyCarousel({ images }) {
    const [valid, setValid] = useState(true);
    useEffect(
        () => {
            if (images.length <= 1) {
                setValid(false);
            } else {
                setValid(true);
            }
        }, []
    )

    return (
        <Carousel showStatus={false} showThumbs={false} showIndicators={valid} showArrows={valid}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image.url} />
                </div>
            ))}
        </Carousel>
    )
}