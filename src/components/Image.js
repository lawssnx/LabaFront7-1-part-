import React, { useState } from "react";

function Image() {
  const [imageWidth, setImageWidth] = useState(400);
  const [image, setImage] = useState({
    src: "https://www.10mest.com/photos/czech-republic-prague-old-town-and-vltava-river-1280x720.jpg",
    alt: "Фото Праги",
  });

  const increaseSize = () => {
    setImageWidth((prevWidth) => prevWidth + 50);
  };

  const decreaseSize = () => {
    setImageWidth((prevWidth) => (prevWidth > 50 ? prevWidth - 50 : prevWidth));
  };

  const removeImage = () => {
    setImage(null);
  };

  const addImage = () => {
    setImage({
      src: "https://www.10mest.com/photos/czech-republic-prague-old-town-and-vltava-river-1280x720.jpg",
      alt: "Фото Праги",
    });
  };

  return (
    <div>
      {image && <img src={image.src} alt={image.alt} width={imageWidth} />}
      <div>
        <button onClick={addImage}>Додати</button>
        <button onClick={increaseSize}>Збільшити</button>
        <button onClick={decreaseSize}>Зменшити</button>
        <button onClick={removeImage}>Видалити</button>
      </div>
    </div>
  );
}

export default Image;
