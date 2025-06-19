import { useState } from 'react'
import './App.css'
import StudentCard from './StudentCard'
import StudentDetail from './StudentDetail'

function App() {
  const [students, setDetails] = useState([
    {sname: "Alex", sAge: 24, sCity: "Delhi"}
  ])
  const updateDetails = (details) =>{
    setDetails([...students, details])
  }
  return (
    <>
      <StudentDetail onUpdateDetails={updateDetails}/>

      {students.map((std) => (
        <StudentCard key={std.sname} {...std}/>
      ))}

    </>
  )
}

export default App
