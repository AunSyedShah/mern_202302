import Button from "./components/Button";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div>
      <NavBar/>
      <h1 className="text-9xl text-red-500">Hello World</h1>
      <Button text="Click Me"/>
      <Button text="About Us"/>
      <Button  text="Order Now"/>
    </div>
  )
}