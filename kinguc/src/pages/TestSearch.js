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
        </div>
    )
}

export default TestSearch