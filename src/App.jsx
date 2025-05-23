import { useState } from "react"

export default function App(){
  let [fruits, setFruits] = useState([
    {
      "fruitName": "Mango",
      "price": 250
    },
    {
      "fruitName": "Banana",
      "price": 100
    },
    {
      "fruitName": "Cucumber",
      "price": 80
    },
  ]);

  return(
    <div>
      <h1>Hello World</h1>
      {
        fruits.map((fruit) => {
          return <h1 className="text-5xl">{fruit.fruitName}</h1>
        })
      }
    </div>
  )
}