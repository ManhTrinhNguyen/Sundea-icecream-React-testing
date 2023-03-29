import React from 'react'

function Toppings({name , imagePath}) {
  return (
    <img src={`http://localhost:3030/${imagePath}`} alt={`${name} topping`} />
  )
}

export default Toppings