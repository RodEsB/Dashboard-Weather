import { useState } from 'react'
import search from '/src/assets/search.svg'
import './SearchBar.css'

type SearchProps = {
  onSearch: (city: string) => void
}

function Search({ onSearch }: SearchProps) {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    if (!query) return
    onSearch(query)  // Aquí le dices a App que busque el clima para la ciudad
  }

  return (
    <div className="search-bar">
      <img
        src={search}
        alt="Buscar"
        onClick={handleSearch}
        style={{ cursor: 'pointer' }}
      />
      <input
        type="text"
        placeholder="Buscar clima por ciudad"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSearch()
        }}
      />
    </div>
  )
}

export default Search
