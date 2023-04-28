import React, { useState } from "react";
import styled from "styled-components";
import * as htmlToImage from 'html-to-image';

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
  color: rgb(65 65 65);
  margin-left:35%;
  margin-right:30%;
`;

const InputItem = styled.div`
  align-item:'center',
  margin-left:30%;
  margin-right:30%;
`;

const FirstQuadrant = styled.div`
box-sizing: border-box;
width: 48%;
height: 48%;
margin-right: 2%;
margin-bottom: 2%;
display: flex;
-webkit-box-pack: center;
border-radius: 20px;
justify-content: center;
-webkit-box-align: center;
border-bottom-left-radius: 30px;
border-bottom-right-radius: 30px;
border-top-left-radius: 31px;
border-top-right-radius: 30px;
align-items: center;
`;

const SecondQuadrant = styled.div`
box-sizing: border-box;
width: 48%;
height: 48%;
margin-left: 2%;
margin-bottom: 2%;
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
border-top-left-radius: 10px;
align-items: center;
border-top-right-radius: 10px;
`;

const Third = styled.div`
box-sizing: border-box;
width: 48%;
height: 48%;
margin-top: 2%;
margin-right: 2%;
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
align-items: center;
`;

const Quad = styled.div`
box-sizing: border-box;
width: 48%;
height: 48%;
margin-left: 2%;
margin-top: 2%;
display: flex;
-webkit-box-pack: center;
justify-content: center;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
-webkit-box-align: center;
align-items: center;
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;

const Questions = styled.div`
width: 560px;
height: 80px;
padding-left: 29px;
border-radius: 10px;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
padding-right: 30px;
padding-bottom:30px;
`;

const TopComponent = styled.div`
  background-color: rgb(236 236 236);
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-weight:bold;
  color:rgb(24 38 71);
  /*-webkit-text-stroke: 1px black;*/
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size:22px;
  padding-left:30px;
  padding-right:30px;
  border-bottom-left-radius:10px;
  border-bottom-right-radius:10px;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  margin-left:30px;
  margin-right:30px;
  
`;

const BottomComponent = styled.div`
  background-color: rgb(138 155 194);
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-weight:bold;
  color:#fff;
  -webkit-text-stroke: 1px black;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size:22px;
  border-bottom-left-radius:10px;
  border-bottom-right-radius:10px;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  margin-left:30px;
  margin-right:30px;
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
  const containerStyle = {
    position: 'relative',
    width: '500px',
    height: '500px',
    backgroundColor: '#ccc',
  };
  
  const imageStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
        <Container style={{padding:'30px', backgroundColor:'rgb(19 31 60)', borderTopLeftRadius:'10px', borderTopRightRadius:'10px'}}>
        { <Image src="./logo1.png" alt="imagetest" style={{position:'fixed', width:'100px',top:'240px',right:'717px',height:'160px'}}/> }
          <FirstQuadrant>{images[0] && <Image src={images[0]} alt="image 1" style={{borderTopLeftRadius:'10px', borderTopRightRadius:'10px', borderBottomLeftRadius:'10px', borderBottomRightRadius:'10px'}} />}</FirstQuadrant>
          <SecondQuadrant>{images[1] && <Image src={images[1]} alt="image 2" style={{borderTopLeftRadius:'10px', borderTopRightRadius:'10px', borderBottomLeftRadius:'10px', borderBottomRightRadius:'10px'}}/>}</SecondQuadrant>
          <Third>{images[2] && <Image src={images[2]} alt="image 3" style={{borderTopLeftRadius:'10px', borderTopRightRadius:'10px', borderBottomLeftRadius:'10px', borderBottomRightRadius:'10px'}} />}</Third>
          <Quad>{images[3] && <Image src={images[3]} alt="image 4"style={{borderTopLeftRadius:'10px', borderTopRightRadius:'10px', borderBottomLeftRadius:'10px', borderBottomRightRadius:'10px'}} />}</Quad>
        </Container>
        <Questions>
          <div style={{width:'560px', display:'flex', flexWrap:'wrap', marginLeft:'75%',borderBottomLeftRadius:'10px', borderBottomRightRadius:'10px', backgroundColor:'rgb(19 31 60)', marginRight:'30%', height:'100px', paddingBottom:'30px'}}>
           <TopComponent>{topText}</TopComponent>
           <BottomComponent>{bottomText}</BottomComponent>
          </div>
        
            
          </Questions>
      </div>
      </div>
      <div id="saveSection" style={{marginBottom:'50px', marginLeft:'45%'}}>
      <button onClick={exportComponentAsImage}>Guardar carta</button>
      </div>
     
    </>
  );
};

export default App;
