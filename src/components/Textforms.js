import React, {useState} from 'react'

 

export default function Textforms(props) {

const handleUpClick = ()=>{
  // console.log("Uppercase for clicked" + text);
  let newtext = text.toUpperCase();
  setText(newtext)
}

const handleLoClick = ()=>{
  // console.log("Uppercase for clicked" + text);
  let newtext = text.toLowerCase();
  setText(newtext)
}

const handleclearClick = ()=>{
  // console.log("Uppercase for clicked" + text);
  let newtext = '';
  setText(newtext)
}

const handleOnChange = (event)=>{
  // console.log("On Change");
  setText(event.target.value)
}

const handlecopy = () => {
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))

}


  const [text, setText] = useState('');
  let mystyle={
    backgroundColor:'rgb(224,224,224)',
    border : "0px solid gray",
    borderRadius: "8px",
    padding: "5px"
    
  }
  let myy={
    border: "0px solid grey",
    backgroundColor : "white",
    padding: "10px",
    borderRadius : "8px"
    
  }

  

  return (
    
   <>
   <div>
   <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
 
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button className="btn btn-secondary mx-2" onClick={handleclearClick}>CLEAR TEXT</button>
</div>
 
 <div className="container my-3" style={mystyle}>
  <h2>Your Text Summary</h2>
  <p><b> {text.split(" ").length} </b>words and<b> {text.length} </b>characters</p>
  <p><b>{0.008 * text.split(" ").length}</b>Minutes Read</p>
  <p style={myy}>
  <h3 >Preview</h3>
  <p >{text.length>0?text:"Enter something to preview it here."}</p>
  </p>
 </div>
 <div className="box my-2 mx-2"  style={mystyle}>
 <h2>What Is Word Counter ?</h2>
 <p >The word count is the number of words in a document or passage of text. Word counting may be needed when a text is required to stay within certain numbers of words. This may particularly be the case in academia, legal proceedings, journalism and advertising. Word count is commonly used by translators to determine the price of a translation job. Word counts may also be used to calculate measures of readability and to measure typing and reading speeds (usually in words per minute). When converting character counts to words, a measure of 5 or 6 characters to a word is generally used for English.</p>
 </div>

   </>
  )
}
