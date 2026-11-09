import { useState } from "react"
function App() {
  let [count , setCount] = useState(0)

  function increase(){
    // console.log("counter : " ,count)
    return setCount(count + 1)
  }


  function decrease(){
    // console.log("counter : " ,count)
    if (count === 0) return

    return setCount(count - 1)
  }

  return (
    <>
      <h1>BASHEER ULLAH</h1>
      <h1>COUNTER</h1>
      <h2>Counter Value : {count}</h2>
      <button onClick={increase}>Increase value ++</button>
      <button onClick={decrease}>Decrease value --</button>
    </>
  )
}

export default App
