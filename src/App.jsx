import { useState, useEffect } from "react";
import axios from "axios"

export default function App() {

  let [data, setData] = useState([]);

  async function get_data() {
    let response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(response.data)
    setData(response.data)
  }


  useEffect(function handler(){
    get_data()
  }, [])

  return (
    <div>
      {/* <h1 className="text-5xl">{data.title}</h1> */}

    </div>
  )
}