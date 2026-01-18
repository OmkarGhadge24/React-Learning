import Card from "./Components/Card"

const App = () => {
  const profiles = [
  {
    id: 1,
    name: "Omkar Ghadge",
    profession: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1619533394727-57d522857f89?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Passionate frontend developer skilled in HTML, CSS, JavaScript, and React."
  },
  {
    id: 2,
    name: "Ajay Singh",
    profession: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1718209881006-f6e313e2e109?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Creative designer focused on clean interfaces and user experiences."
  },
  {
    id: 3,
    name: "Priya Sharma",
    profession: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1747707498818-90a710f33677?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Full stack developer experienced in MERN stack and building scalable web apps."
  },
  {
    id: 4,
    name: "Ananya Verma",
    profession: "Product Designer",
    image: "https://images.unsplash.com/photo-1613971582147-ce1266b692de?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Product designer with a strong focus on user research and visual storytelling."
  },
  {
    id: 5,
    name: "Rahul Mehta",
    profession: "Backend Developer",
    image: "https://images.unsplash.com/photo-1656680824196-dbbfe0864275?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Backend developer specializing in Node.js, APIs, databases, and system design."
  }
];


  return (
    <div className="card-container">
      {profiles.map(profile => (
        <Card
          key={profile.id}
          name={profile.name}
          profession={profile.profession}
          image={profile.image}
          bio={profile.bio}
        />
      ))}
    </div>
  )
}

export default App