
const App = () => {
  localStorage.setItem('name', 'OG')
  console.log(localStorage.getItem('name'));
  // localStorage.removeItem('name')
  // localStorage.clear()

  const user = {
    name: 'rahul',
    age: 20,
    city: 'mumbai'
  }
  localStorage.setItem('user', JSON.stringify(user))
  const uservar = localStorage.getItem('user')
  console.log(typeof (uservar), uservar);
  console.log(JSON.parse(uservar))
  return (
    <div className="min-h-screen text-white bg-zinc-900 p-4">App</div>
  )
}

export default App