import '../App.css';
import SearchBar from './SearchBar';

function Header() {
    return (
        <div className="Header">
            <div className="col1"></div>
            <div className="col2">
                <h1>Movie Website!</h1>
            </div>
            <div className="col3">
                <SearchBar/>
            </div>
        </div>
    )
}

export default Header;