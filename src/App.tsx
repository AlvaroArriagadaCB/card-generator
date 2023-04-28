import React, { useState } from "react";
import styled from "styled-components";
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

const Container = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  background-color:'black';
  margin-left:30%;
  margin-right:30%;
`;

const H1 = styled.div`
  text-align:'center';
  color: #4e7385;
  margin-left:35%;
  margin-right:30%;
`;

const InputItem = styled.div`
  align-item:'center',
  margin-left:30%;
  margin-right:30%;
`;

const Quadrant = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 50%;
  border: 7px solid #4e7385;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FirstQuadrant = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 50%;
  border-top: 7px solid #4e7385;
  border-left: 7px solid #4e7385;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3.5px solid #4e7385;
  border-right: 3.5px solid #4e7385;
`;

const SecondQuadrant = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 50%;
  border-top: 7px solid #4e7385;
  border-left: 3.5px solid #4e7385;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3.5px solid #4e7385;
  border-right: 7px solid #4e7385;
`;

const Third = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 50%;
  border-top: 3.5px solid #4e7385;
  border-left: 7px solid #4e7385;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 7px solid #4e7385;
  border-right: 3.5px solid #4e7385;
`;

const Quad = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 50%;
  border-top: 3.5px solid #4e7385;
  border-left: 3.5px solid #4e7385;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 7px solid #4e7385;
  border-right: 7px solid #4e7385;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Questions = styled.div`
  height: 100px;
  width:97.2%;
`;

const TopComponent = styled.div`
  background-color: rgb(91 144 72);
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-weight:bold;
  color:#fff;
  border-left: 7px solid #4e7385;
  border-right: 7px solid #4e7385;
  border-bottom: 7px solid #4e7385;
  -webkit-text-stroke: 1px black;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size:22px;
`;

const BottomComponent = styled.div`
  background-color: rgb(45 98 141);
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-weight:bold;
  color:#fff;
  border-left: 7px solid #4e7385;
  border-right: 7px solid #4e7385;
  border-bottom: 7px solid #4e7385;
  -webkit-text-stroke: 1px black;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size:22px;
`;

const App = () => {
  const [images, setImages] = useState<string[]>([]);
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);

    const urls = files.map((file) => URL.createObjectURL(file));

    setImages(urls);
  };
  
   const handleFileNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.value);
  };

  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  const handleTopTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopText(e.target.value);
  };

  const handleBottomTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBottomText(e.target.value);
  };

  const exportComponentAsImage = () => {
    const container = document.getElementById('containerSection');
    if (container) {
      htmlToImage.toPng(container, { quality: 1 })
        .then(function (dataUrl) {
          const link = document.createElement('a');
          link.download = fileName || 'carta.jpeg'; // Usa fileName o 'carta.jpeg' si fileName está vacío
          link.href = dataUrl;
          link.click();
        });
    }
  };

  return (
    <>
      <H1><h1>Constructor de cartas</h1></H1>
      <InputItem><input type="file" multiple onChange={handleFileUpload} /></InputItem>
      <input type="text" placeholder="Nombre de la carta" onChange={handleFileNameChange} />
      <input type="text" placeholder="Pregunta superior" value={topText} onChange={handleTopTextChange} />
      <input type="text" placeholder="Pregunta inferior" value={bottomText} onChange={handleBottomTextChange} />
      <hr></hr>
      <div id="containerSection" style={{height:'700px'}}>
        <div id="container">
        <Container>
          <FirstQuadrant>{images[0] && <Image src={images[0]} alt="image 1" />}</FirstQuadrant>
          <SecondQuadrant>{images[1] && <Image src={images[1]} alt="image 2" />}</SecondQuadrant>
          <Third>{images[2] && <Image src={images[2]} alt="image 3" />}</Third>
          <Quad>{images[3] && <Image src={images[3]} alt="image 4" />}</Quad>
          <Questions>
            <TopComponent>{topText}</TopComponent>
            <BottomComponent>{bottomText}</BottomComponent>
          </Questions>
        </Container>
        
      </div>
      </div>
      <div id="saveSection" style={{marginBottom:'50px', marginLeft:'45%'}}>
      <button onClick={exportComponentAsImage}>Guardar carta</button>
      </div>
     
    </>
  );
};

export default App;
