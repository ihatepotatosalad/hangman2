import React from 'react';
import './HangmanWord.scss';

type keyboardProps={
    letters:string[],
    currentWord:string
}
function HangmanWord({letters,currentWord}:keyboardProps) {

  return (
    <div className='wordlines'>


{currentWord.split('').map((letter,index)=>(

    <span style={{borderBottom:'.1em solid black'}}>
    <span style={{visibility:letters.includes(letter)?'visible':'hidden'}} key={index}>{letter}</span>
    
    
    </span>
))}

    </div>
  )
}

export default HangmanWord