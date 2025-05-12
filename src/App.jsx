import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div>
      <NavBar/>
      <h1 className="text-9xl text-red-500">Hello World</h1>
      <button className="px-4 py-2 text-yellow-300 border border-amber-400 rounded-full hover:bg-red-400 hover:text-white transition duration-300">
        Hello World
      </button>
    </div>
  )
}