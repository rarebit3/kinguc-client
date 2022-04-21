import Search from "../components/Search"
import { useState } from "react"
import { SearchCastles } from "../services/CastleService"
import "../styles/search.css"


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
        <div className="searchbar">
            <Search onChange={handleChange} value={searchQuery} onSubmit={handleSubmit} placeholder='Search Castles'/>
            {searched && (
            <div className="search">
                <h2>Showing {searchResults.length} {searchResults.length > 1 ? <span>Results</span> : <span>Result</span>}</h2>
                <section className="search-results">
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