import React, { useState,useRef  } from 'react';
import './App.css';
import PaintImage from './PaintImage';

const app = props => {

  const [coordinatesState, setCoordinatesState] = useState({
    coordinates: [
      { pos: "absolute", x: "10px" , y: "10px" }
    ]
  });


  const switchCoordinateHandler = (props) => {
    setCoordinatesState({
      coordinates: [
        { pos: "absolute", x: "100px" , y: "100px" }
      ]
    });
  };


  const handleClickEvent = () => {
    const form = nameForm.current
    //alert(`${form['xcord'].value} ${form['ycord'].value}`)
    let xcord = `${form['xcord'].value}`
    let ycord = `${form['ycord'].value}`
    setCoordinatesState({
      coordinates: [
        { pos: "absolute", x: xcord  , y: ycord }
      ]
    });

 }


  const inputStyle = {
    border: '2px solid blue',
    marginLeft: 'auto',
    marginTop: '10px'
};

const nameForm = useRef(null)
  return (
    <div className="App">
        
        <PaintImage
      x={coordinatesState.coordinates[0].x} y={coordinatesState.coordinates[0].y}
      pos={coordinatesState.coordinates[0].pos}
      />
 <form ref={nameForm}>
<input 
        type="text"
        name="xcord"
        style={inputStyle}
        defaultValue={coordinatesState.coordinates[0].x}
        
        />
        <input 
        type="text" 
        name="ycord"
        style={inputStyle}
        defaultValue={coordinatesState.coordinates[0].x}
        />
</form>
      <button onClick={handleClickEvent}>Click to Move</button>
    </div>
  );
};

export default app;
