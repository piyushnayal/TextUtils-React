import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("Upercase was clicked");
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLoClick = () => {
        // console.log("Lowercase was clicked");
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase", "success");
    }

    const handleOnChange = (event) => {
        // console.log("onChange");
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleClear = () => {
        setText("");
        props.showAlert("Text cleared!", "success");
    }

    const [text, setText] = useState("Enter text here");
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Handle Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>Paragraph can be read in: {0.008 * text.split(" ").length} minutes</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
