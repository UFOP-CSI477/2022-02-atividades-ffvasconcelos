import { useState } from 'react'
import './App.css'
import Menu from './components/menu/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
		<div className='App'>
      <h1>CRUD - Banco de Sangue</h1>
      
      <Menu/>
		</div>
	);
}

export default App
