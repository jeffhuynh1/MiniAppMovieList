import { useContext } from 'react';
import '../App.css';
import Context from '../Context';

function SearchBar() {
    let searchbox = "";
    const { setSearchTerm } = useContext(Context);
    return (
        <div className="SearchBar">
            <input className="search-field" type="text" id="launchSearch" placeholder="Search..." title="Search" onChange= {(e)=>{searchbox = e.target.value}}/>
            <button className="searchButton" type="button" onClick={()=> {setSearchTerm(searchbox)}} id="buttonToSearch">
                {/* <MdSearch style={{ color:"5e1722", wdith: "40px", height: "40px" }}/> */}
            </button>
        </div>
    )
}

export default SearchBar;