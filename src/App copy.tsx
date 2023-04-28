import React, { useState } from "react";
import SearchBar from "./Searchbox";
import { Container, Row, Col, Image } from 'react-bootstrap';

interface UnsplashResult {
  id: string;
  src: {
    regular: string;
    small: string
    medium:string;
  };
  url:string;
  alt_description: string;
}

function ImageSearch() {
  const [images, setImages] = useState<UnsplashResult[]>([]);

  const handleSearch = (query : string) => {
    fetch(`https://api.pexels.com/v1/search?query=${query}&width=1000&height=1000&orientation=square&per_page=100`, {
      headers: {
        Authorization: "M2ACr5bAJ92wsqvkyvdhI1IP3xiEbaX4jE2N5KBwVDWtCGgTdSDWy72a",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setImages(data.photos);

        console.log(data.photos);
      });
  };

  return (
    <div>
      <h1>Buscador de imagenes</h1>
      <SearchBar onSubmit={handleSearch} />
      <Container>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map(image => (
          <Col key={image.id} md={4}>
            <Image src={image.src.medium} alt={image.alt_description} thumbnail />
          </Col>
        ))}
     </div>
    </Container>
    </div>
  );
}

export default ImageSearch;