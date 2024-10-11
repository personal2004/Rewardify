import style from './index.module.css';
import icons from '../../icons/icons';
const SearchBar=()=>{
    return(
        <div className={style.SearchBar}>
            <span>{icons.searchicon}</span>
            <input placeholder='Search for products'/>
        </div>
    )
}

export default SearchBar