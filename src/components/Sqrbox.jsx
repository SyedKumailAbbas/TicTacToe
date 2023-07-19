import React from 'react'
import { useState } from 'react'


export const Sqrbox = (props) => {
  
    return (
        <div className='sqrbox'>

            <button className='sqrbtn' onClick={props.onsqrclick}>
           {props.value}
            </button>


        </div>
    )
}

