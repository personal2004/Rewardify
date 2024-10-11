import style from './index.module.css';
import SearchBar from '../../Components/searchbar/searchbar';
import icons from '../../icons/icons';
import { Outlet } from 'react-router-dom';
const ProductLayout=()=>{
    return(
    <div className={style.ProductLayout}>
        <div className={style.ProductLayout_header}>
            <div className={style.Product_hea}>
                <h4>My Product Listing</h4>
                <button>{icons.plussymbol} Add a Product</button>
            </div>
            <SearchBar/>
        </div>
        <Outlet/>
    </div>
    )
}

export default ProductLayout