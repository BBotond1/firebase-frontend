import React from 'react'

function Person({name, height, mass}) {
  return (
    <div className='Person'>
      <h2>{name}</h2>
      <h3>{height} cm</h3>
      <h4>{mass} kg</h4>
    </div>
  )
}

export default Person