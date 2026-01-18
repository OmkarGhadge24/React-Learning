
const App = () => {
  const btnClick = () =>{
    alert("Button is clicked")
  }
  function mouseOver(){
    console.log("Mouse Entered")
  }
  return (
    <div className='bg-zinc-800 w-full h-screen text-white p-10 '>
      <h3>Hello Guys</h3>
      <button onClick={btnClick} className="px-4 py-2 bg-zinc-600 mt-6" >Click Here</button>
      <button onMouseEnter={mouseOver} onClick={btnClick} className="px-4 py-2 bg-zinc-600 mt-6 ml-4" >Explore More</button>
      <input onChange={function(el){
        console.log(el.target.value);
      }} type="text" className="ml-4 outline-none border border-zinc-700 p-2" placeholder="Enter Text" />
    </div>
  )
}

export default App