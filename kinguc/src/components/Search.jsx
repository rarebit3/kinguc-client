const Search = (props) => {

    return (
      <form onSubmit={props.onSubmit} >
        <input
        type="text"
        name="search"
        value={props.value}
        placeholder="Search Castles"
        onChange={props.onChange}
        />
        <button type="submit">Search</button>
      </form>
    )
}
  
  export default Search