import axios from 'axios'

const App = () => {
  // Fetch API Calling
  // async function getData(){
  //   const data = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const json = await data.json()
  //   console.log(json)
  // }

  // Axios API Calling
  async function getData(){
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(data.data)
  }
  
  return (
    <div className="p-4">
      <button onClick={getData} className="bg-zinc-600 px-3 py-2">Get Data</button>
    </div>
  )
}

export default App