import React,{useEffect, useState} from "react";
import wordslist from './assets/wordlist.json'
import Keyboard from "./Components/Keyboard";
import Hangman from "./Components/Hangman";
import HangmanWord from "./Components/HangmanWord";
import './App.scss'
function App() {
  const[currentWord,setCurrentWord]=useState(()=>{
    
    return wordslist[Math.floor(Math.random()*wordslist.length)]
  })
  const[letters,setLetters]=useState<string[]>([]);

  const incorrect=letters.filter(letter => !currentWord.includes(letter));

  useEffect(()=>{
const handler =(e:KeyboardEvent)=>{
  const key=e.key

  if(!key.match(/^[a-z]$/)) return
  e.preventDefault()

  addGuessedLetter(key)
}


document.addEventListener('keypress',handler)
return()=>{
  document.removeEventListener('keypress',handler)
}
  },[letters])
function addGuessedLetter(e:string){
if (letters.includes(e))return
else{
  setLetters(currentLetters=>[...currentLetters,e])
}

}
  return (
    <div className="app">
    <div className="winorlose">
lose
win


    </div>
    <Hangman numberGuessed={incorrect.length}/>
    <HangmanWord letters={letters} currentWord={currentWord}/>
    <Keyboard activeLetters={letters.filter(letter=>currentWord.includes(letter)) } inactive={incorrect}addGuessedLetter={addGuessedLetter}/>
    </div>
  )
}

export default App
