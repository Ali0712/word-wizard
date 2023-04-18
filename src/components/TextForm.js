import React, { useState } from 'react'
import '../App.css';


function TextForm() {
    const [text, setText] = useState('')
    const [copy, setCopy] = useState('')

    let withoutSpaces = text.replace(/\s+/g, '')

    const handleChange = (e) => setText(e.target.value)

    const handleUpperCase = () => {
        setText(text.toUpperCase())
    }
    const handleLowerCase = () => {
        setText(text.toLowerCase())
    }
    const handleClear = () => {
        setText('')
    }

    const handleCopy = () => {

        setCopy(text)
        navigator.clipboard.writeText(text);

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/).filter((e) => e.length !== 0);
        setText(newText.join(' '));
    }

    const handleCapitalize = () => {
        let cap = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
        setText(cap)
    }

    return (
        <div className='container px-5'>
            <h2 className='my-1 text-center'>Make Your Text Work for You</h2>

            <textarea className="form-control border-primary" id="myInput" rows="5" cols="3" placeholder='Enter your Text here' value={text} onChange={handleChange}></textarea>
            <div className='my-3'>
                <button type="button" className="btns btn btn-secondary mx-1 my-1" onClick={handleUpperCase}>To UpperCase</button>
                <button type="button" className="btns btn btn-secondary mx-1 my-1" onClick={handleLowerCase}>To LowerCase</button>
                <button type="button" className="btns btn btn-secondary mx-1 my-1" onClick={handleCapitalize}>Capitalize</button>
                <button type="button" className="btns btn btn-secondary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button type="button" className="btns btn btn-secondary mx-1 my-1" onClick={handleClear}>Clear Text</button>
                <button type="button" style={{ width: '120px' }} className="btns btn btn-secondary mx-1 my-1" onClick={handleCopy}>
                    {copy == text && text != '' ? 'Copied ✔' : 'Copy Text'}
                </button>
            </div>

            <div>
                <h2>Text Scrutiny :
                </h2>
                <ul>
                    <li>Words Count : <b>{text.split(/\s+/).filter((e) => e.length !== 0).length}</b></li>
                    <li>Sentence Count : <b>{text.split('.').filter((e) => e.length !== 0).length}</b></li>
                    <li>Characters Count (with spaces) : <b>{text.length}</b></li>
                    <li>Characters Count (without spaces) : <b>{withoutSpaces.length}</b> </li>
                </ul>

            </div>


            {/* 
            <h3>Preview Your Text</h3>
            <textarea className="form-control border-primary preview" rows="5" cols="3" disabled value={!text ? 'Enter text to preview' : text}>
                
            </textarea> */}



        </div>

    )
}

export default TextForm