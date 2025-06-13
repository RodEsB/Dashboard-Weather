import { useState } from 'react'
import search from '/src/assets/search.svg'
import './SearchBar.css'

function App() {
  const [query, setQuery] = useState('')

  return (
    <div className="search-bar">
    <img src={search} alt="Buscar" / >
      <input
        type="text"
        placeholder="Buscar clima por ciudad"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
       
     </div>
  )
}

export default App
