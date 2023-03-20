import { useState } from "react";
import imageContext from "./imageContext";

const ImageState = (props) => {
  //images
  const imagesinit = [];
  const [images, setImages] = useState(imagesinit);

  // getting images
  const getImages = async (id) => {
    // api call
    const response = await fetch(
      `http://localhost:5000/api/image/getimages/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    setImages(json);
  };

  return (
    //sending props in context
    <imageContext.Provider value={{ images, getImages, setImages }}>
      {props.children}
    </imageContext.Provider>
  );
};

export default ImageState;
