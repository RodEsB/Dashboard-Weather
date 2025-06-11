import { useState } from 'react'
import search from './assets/search.svg'
import './App.css'

function App() {
  const [query, setQuery] = useState('')

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>
        <img src={search} alt="Buscar" />
      </button>
    </div>
  )
}

export default App
