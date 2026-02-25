import React,{useState} from 'react'

function App() {
  const[color,setColor]=useState("white")
  return (
    <div>
      <h1>Color picker</h1>
      <button onClick={()=>setColor("red")}>Red</button>
      <button onClick={()=>setColor("green")}>Green</button>
      <button onClick={()=>setColor("blue")}>Blue</button>       
      <div className='bgchange' style={{background:color}}></div>
    </div>
  )
}
export default App;
