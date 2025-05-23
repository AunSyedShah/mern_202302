import axios from "axios";
import { useState } from "react"

export default function App(){
  let [fruits, setFruits] = useState([]);

  async function get_data(){
    let response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setFruits(response.data);
  }

  return(
    <div>
      <h1>Hello World</h1>
      {
        fruits && fruits.length > 0 ? fruits.map((fruit) => {
          return(
            <div className="bg-gray-200 p-2 w-min m-2">
              <h1>{fruit.title}</h1>
              <h1>{fruit.id}</h1>
            </div>
          )
        }) : <h1 className="text-3xl text-red-400">No Data Found</h1>
      }

      <button className="bg-green-400 text-white rounded-2xl p-2" onClick={get_data}>Get Data</button>
    </div>
  )
}