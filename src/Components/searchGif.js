import { useState } from "react";

function Search({onSearch}){
    const [title,setTitle] = useState('')

    const handleChange=(event)=>{
        console.log(event.target.value);
        setTitle(event.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        onSearch(title);
        setTitle('');
    }
    return<div className="search">
        <form  onSubmit={handleSubmit}>
            <input className = "search-input" value={title} onChange={handleChange}/>
            <button className="submit-btn">Search</button>
        </form>
    </div>
}
export default Search;