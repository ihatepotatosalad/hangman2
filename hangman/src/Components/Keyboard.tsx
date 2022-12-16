import React from 'react';
import './Keyboard.scss'
const KEYS=[
'a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z',


    
]
type addLettersProp={
    activeLetters:string[],
    inactive:string[],
    addGuessedLetter:(letter:string)=>void

}
function Keyboard({activeLetters,inactive,addGuessedLetter}:addLettersProp) {
    
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(75px,1fr))',gap:'.5rem',alignSelf: 'stretch'}}>
{KEYS.map(key=>
     
   <button className='buttonstyle' key={key} onClick={()=>addGuessedLetter(key)}>{key}</button>
    
    )}


    </div>
  )
}

export default Keyboard