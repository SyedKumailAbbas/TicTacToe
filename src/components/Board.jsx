import React, { useState } from 'react'
import { Sqrbox } from './Sqrbox'
import { Status } from './Status'
export const Board=()=> {
  const [squares,setsquares]=useState(Array(9).fill(null))
  const [xisnext, setxisnext]=useState(true)
  const handleclick=(i)=>{
    const tempsquares=squares.slice()
    if(tempsquares[i]||winner(squares)){
      return }
    if (xisnext){
      tempsquares[i]="X"
    }
    else {
      tempsquares[i]="O"

    }
    setsquares(tempsquares)
    setxisnext(!xisnext)
    winner(squares)
  
  }

  const winner=(squares)=>{
    const lines=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    for (let i=0;i<lines.length;i++){
      const [x, y, z]=lines[i]
      if (squares[x]===squares[y]&&squares[x]===squares[z]){
        return squares[x]
    }
  }
  }
const win=winner(squares)
let status
if (win){
  status="Winner " + win
}
  return (
    <div className='board'>
    <Status value={status}/>
    <div className='boardrow'>
      <Sqrbox value={squares[0]} onsqrclick={()=>handleclick(0)}/>
      <Sqrbox value={squares[1]} onsqrclick={()=>handleclick(1)}/>
      <Sqrbox value={squares[2]} onsqrclick={()=>handleclick(2)}/>
    </div>
    <div className='boardrow'>
      <Sqrbox value={squares[3]} onsqrclick={()=>handleclick(3)}/>
      <Sqrbox value={squares[4]} onsqrclick={()=>handleclick(4)}/>
      <Sqrbox value={squares[5]} onsqrclick={()=>handleclick(5)}/>

    </div>
    <div className='boardrow'>
      <Sqrbox value={squares[6]} onsqrclick={()=>handleclick(6)}/>
      <Sqrbox value={squares[7]} onsqrclick={()=>handleclick(7)}/>
      <Sqrbox value={squares[8]} onsqrclick={()=>handleclick(8)} />

    </div>

  </div>
  )
}

