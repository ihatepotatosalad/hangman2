import React from 'react';
import './Hangman.scss';

const HEAD=(
    <div style={{width:'50px',height:'50px',borderRadius:'100%',border:'10px solid black',position:'absolute',top:'50px',right:'-30px'}}></div>
)
const BODY=(
    <div style={{width:'10px',height:'110px',background:'black',position:'absolute',top:'115px',right:0}}></div>
)
const LEFTLEG=(
    <div style={{width:'100px',height:'10px',background:'black',position:'absolute',top:'210px',right:0,rotate:'-60deg',transformOrigin:'right bottom'}}></div>
)
const RIGHTLEG=(
    <div style={{width:'100px',height:'10px',background:'black',position:'absolute',top:'210px',right:'-90px',rotate:'60deg',transformOrigin:'left bottom'}}></div>
)
const RIGHTARM=(
    <div style={{width:'100px',height:'10px',background:'black',position:'absolute',top:'150px',right:'-100px',rotate:'-30deg',transformOrigin:'left bottom'}}></div>
)
const LEFTARM=(
    <div style={{width:'100px',height:'10px',background:'black',position:'absolute',top:'150px',right:'10px',rotate:'30deg',transformOrigin:'right bottom'}}></div>
)

const BODY_PARTS=[HEAD,BODY,LEFTARM,LEFTLEG,RIGHTARM,RIGHTLEG]
type HangmanProps={
numberGuessed:number

}
function Hangman({numberGuessed}:HangmanProps) {
  return (
    <div className='hangman-div'>
{BODY_PARTS.slice(0,numberGuessed)}
        <div style={{background:'black',height:'50px',width:'10px',position:'absolute',top:0,right:0}}/>
<div style={{height:'10px',width:'150px',background:'black',marginLeft:'120px'}}/>
<div style={{height:'400px',width:'10px',background:'black',marginLeft:'120px'}}/>
        <div style={{height:'10px',width:'250px',background:'black'}}/>
        
    
    </div>
  )
}

export default Hangman