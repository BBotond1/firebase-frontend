import React from 'react'

function Person({name, height, mass}) {
  return (
    <div className='Person'>
      <h2>{name}</h2>
      <h3>{height}</h3>
      <h4>{mass}</h4>
    </div>
  )
}

export default Person