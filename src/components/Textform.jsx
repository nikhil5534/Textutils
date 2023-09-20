import React, { useState } from 'react'
export default function Textform(props) {
    const handleUpCLick = () =>{       
        setText(text.toUpperCase())
    }
    const handleLoCLick = () =>{       
        setText(text.toLowerCase())
    }
    const handelOnClicked = (event) =>{
        setText(event.target.value)
    }
    
    const [text,setText]=useState('');
  return (
    <>
    <div className='container' style={{color:props.mode === `dark`?`white`:`black`}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" id="mybox" style={{backgroundColor:props.mode === `dark`?`grey`:`white`,color:props.mode === `dark`?`white`:`black`}} value={text} onChange={handelOnClicked} rows="3"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpCLick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoCLick}>Convert to lowercase</button> 

    </div>
    <div className="container"style={{color:props.mode === `dark`?`white`:`black`}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length}words and {text.length}characters</p>
        <p>{0.08* text.split(" ").length} Minute Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>

    </>
  )
}
  
 