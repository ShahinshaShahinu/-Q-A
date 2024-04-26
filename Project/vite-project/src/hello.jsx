import React from 'react'

function Hello({koko,text}) {
  return (
    <div>

      <h1>{text}</h1>
      <button onClick={()=>koko('child to parent')}>click meee</button>
    </div>
  )
}


export default Hello