export default function Button(props){
    return <button className="p-2 text-yellow-300 border border-amber-400 rounded-full hover:bg-red-400 hover:text-white transition duration-300">{props.text}</button>
}