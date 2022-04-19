import Search from "../components/Search"
import { useState } from "react"
import { SearchCastles } from "../services/CastleService"

const TestSearch = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState(null)
    const [searched, toggleSearched] = useState(false)
    
    const handleChange = (e) => {
        setSearchQuery(e.target.value)
        console.log(searchQuery)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSearchResults(await SearchCastles(searchQuery))
        console.log('handleSubmit', searchResults)
        toggleSearched(true)
        setSearchQuery('')
    }
    
    
    
    
    return (
        <div>
            <Search onChange={handleChange} value={searchQuery} onSubmit={handleSubmit}/>
            {searched && (
            <div className="search">
                <h2>Search Results</h2>
                <section className="search-results container-grid">
                    {searchResults.map((castle) => (
                        <div className="card" key={castle.id}>
                            <h3>{castle.name}</h3>
                            <h3>{castle.forTypes}</h3>
                            <h3>{castle.servantCount}</h3>
                            <h3>{castle.incomePerCastle}</h3>
                            <h3>{castle.location.name}</h3>
                            <div>
                                 <img src={castle.image} alt="castle"/>
                            </div>
                         </div>
                    ))}
                </section>
            </div>
            )}
        </div>
    )
}

export default TestSearch