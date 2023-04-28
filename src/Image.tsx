import React from "react";

interface ImageProps {
    url: string;
    alt: string;
    src: {
      small: string;
      medium: string;
      large: string;
      original: string;
      // agregar otras propiedades según sea necesario
    }
}

function Image({ url, alt, src }: ImageProps) {
  return (
    <div>
      <img src={url} alt={alt} />
    </div>
  );
}

export default Image;