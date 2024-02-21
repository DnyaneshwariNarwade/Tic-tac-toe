import React from "react";
import Square from "./Square";
import './Style.css';
import { useState } from "react";
import { useEffect } from "react";

const BordContainer=()=>
{
   
    const [state,setstate]= useState(Array(9).fill(null));
    const list=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

    ]
   const checkwinner=()=>{
  
   for(let logic of list)
   {
        const [a,b,c]=logic;
        if(state[a]!==null && state[a]===state[b]&& state[a]===state[c])
        {
            return state[a];
        }
        
   }
   return false;
}
   const winner=checkwinner()
   
    const [turn,setturn]=useState(false);
    function Handleclick(index)
    {
        if(state[index]==null)
        {
        const copystate=[...state];
        copystate[index]=turn ?'O':'X';
        setturn(!turn);
        setstate(copystate)
        }
        else{
            return;
        }


    
    }
    const Restart=()=>
    {
        setstate(Array(9).fill(null));
    }
    
    return(
        winner===false?<div className="container">
         <h4 className="row" psty> Player {turn?'o':'x'} please move</h4>
        <div className="row">
            <Square onclick={()=>{Handleclick(0)}} value={state[0]}></Square>
            <Square  onclick={()=>{Handleclick(1)}} value={state[1]}></Square> 
            <Square  onclick={()=>{Handleclick(2)}} value={state[2]}></Square>
         </div>
        <div className="row">
            <Square onclick={()=>{Handleclick(3)}} value={state[3]}></Square> 
            <Square  onclick={()=>{Handleclick(4)}} value={state[4]}></Square> 
            <Square  onclick={()=>{Handleclick(5)}} value={state[5]}></Square>
        </div>
        <div className="row">
            <Square  onclick={()=>{Handleclick(6)}} value={state[6]}></Square> 
            <Square  onclick={()=>{Handleclick(7)}} value={state[7]}></Square> 
            <Square  onclick={()=>{Handleclick(8)}} value={state[8]}></Square>
        </div>
    </div>:
    <div style={{justifyContent:'center',
    alignitems:'center',justifySelf:'center'}
    }>
        <h3>Winner is {winner}</h3>
        <button onClick={()=>{Restart()}}>Play Again</button>
    </div>
    )
}
export default BordContainer;