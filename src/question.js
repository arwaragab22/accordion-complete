
import React from 'react';
import { USERCONTEXT } from "./App";
import { useContext, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
export default function QUESTION({ title, info }) {
   
    const [Showmore, setShowmore] = useState(false);
 
    return (
        <article className='question'>
            <header>
                <h4>{title}</h4>
  
                <button className='btn' onClick={()=> {setShowmore(!Showmore)}}>
                    {Showmore? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {Showmore && <p>{info}</p>}
        </article>
    
    )
}
