import axios from "axios"
import { useEffect, useState } from "react"
import ScoopOption from "./ScoopOption"
import Toppings from "./ToppingOptions"
import AlertBanner from "../common/AlertBanner"

export default function Options({ optionType }) {
  const [items, setItems] = useState([])
  const [error, setError] = useState(false)

  // optionType is "scoops" or "toppings"
  useEffect(() => {
    axios.get(`http://localhost:3030/${optionType}`)
      .then(response => setItems(response.data))
      .catch(error => setError(true)); 
    
  }, [optionType]);


  if (error) {
    return <AlertBanner />
  }

  // TODO : Replace null with ToppingOption when available 

  const ItemComponent = optionType === "scoops" ? ScoopOption : Toppings;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));
  return <div> { optionItems }</div>
}