import React from "react";
import './Style.css';
const Square=(props)=>
{  const f=false;
   
    return(
       
        <div onClick={props.onclick}
      
        className="square" style={{border:"1px solid",
        height:"100px",
        width:'100px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
         }}>
            <h5>{props.value}</h5>
        </div>
    );
}
export default Square;