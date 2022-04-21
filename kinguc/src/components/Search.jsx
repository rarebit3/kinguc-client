const Search = (props) => {

    return (

     <div>
      <form onSubmit={props.onSubmit} >
       
        <input
          
        type="text"
        name="search"
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
       
        />
       

        <button type="submit">Search</button>
       
      </form>
       
      
       </div>
    )
}
  
  export default Search