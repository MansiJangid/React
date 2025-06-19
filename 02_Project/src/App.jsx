import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Panel from './components/Panel'
function App() {
  const[color, setColor] = useState("white")

  return (

    <div className="grid grid-rows-3 items-center gap-4 p-4 justify-center"
    style={{backgroundColor: color}}>

       <div class ="mx-auto fixed flex flex-wrap max-w-sm justify-center items-center gap-x-4 rounded-3xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 ">
       <Button name = 'Pink' changeColor={(col) => setColor(col)} />
       <Button name = 'Orange' changeColor={(col) => setColor(col)} />
       <Button name = 'Teal' changeColor={(col) => setColor(col)} />
       <Button name = 'Beige' changeColor={(col) => setColor(col)} />
       <Button name = 'Green' changeColor={(col) => setColor(col)} />
       </div>


       <div className="mx-auto max-w-sm bg-red-500 text-white p-2 rounded">
       <Panel />
       <Panel />
       <Panel />
       </div>
    </div>
  )
}

export default App
