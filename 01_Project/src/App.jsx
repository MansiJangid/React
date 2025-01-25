import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'
import Counter from './components/Counter'
import Card from './components/Card'

function App() {
  return (
    <div className="center-wrapper">
      <UserCard />
      <Counter name="The Count is : "/>
      <div className='card-container'>
        <h3>Concept Learnt</h3>
        <Card name="Components"> 
          <p>
            React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.
          </p>
        </Card>
        <Card name="Hooks (useState)"> 
          <p>
            Functions starting with use are called Hooks. useState is a built-in Hook provided by React. Hooks are more restrictive than other functions. We can only call Hooks at the top of our components (or other Hooks). useState is a React Hook that lets us add a state variable to our component.
          </p>
        </Card>
        <Card name="Passing Props"> 
          <p>
            React’s component architecture allows us to create a reusable component to avoid messy, duplicated code. Passing props is a great way to explicitly pipe data through our UI tree to the components that use it.
          </p>
        </Card>
      </div>
    </div>
  )
}

export default App
