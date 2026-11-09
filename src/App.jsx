
function App() {
  let count = 5

  function increase(){
    console.log("counter : " ,count)
    return count++
  }


  function decrease(){
    console.log("counter : " ,count)

    return count--
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
