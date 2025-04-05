import React from 'react'
import leaf from './assets/leaf.png'

function Loading() {
  return (
    <div>
        <img src={leaf} alt="" className='loading'/>
        <div className='font-semibold text-zinc-50 animate-pulse text-xs -mt-4'></div>

    </div>
  )
}

export default Loading