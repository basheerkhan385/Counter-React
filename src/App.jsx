import { useState } from "react"
function App() {
  let [count , setCount] = useState(0)
  let [msg , setMsg] = useState("")

  function increase(){
    // console.log("counter : " ,count)
    // setMsg("")
    return setCount(count + 1)
  }


  function decrease(){
    // console.log("counter : " ,count)
    if (count === 0){
      setMsg("Counter cannot go bellow zero!")
      setTimeout( () => {
        setMsg("")
      },5000)
      return
  
    } 

    return setCount(count - 1)
  }
  // setInterval(increase,2000)
  return (
    <>
      <h1>BASHEER ULLAH</h1>
      <h1>COUNTER</h1>
      <h2>Counter Value : {count}</h2>
      <button onClick={increase}>Increase value ++</button>
      <button onClick={decrease}>Decrease value --</button>
      <p>{msg}</p>
    </>
  )
}

export default App
