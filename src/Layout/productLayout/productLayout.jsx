import style from './index.module.css';
import SearchBar from '../../Components/searchbar/searchbar';
import icons from '../../icons/icons';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
const ProductLayout=()=>{
    const location=useLocation();
    const {data}=location.state || '';
    const isaddpage=location.pathname==='/home/products/addproduct';
    const navigate=useNavigate();
    return(
    <div className={style.ProductLayout}>
        <div className={style.ProductLayout_header}>
            <div className={style.Product_hea}>
                {isaddpage? data===undefined || null ? <><div className={style.move_back} onClick={(e)=>navigate(-1)}>{icons.leftpointarrow} Back</div><h4>Add a product</h4></>:
                <>
                <div className={style.move_back} onClick={(e)=>navigate(-1)}>{icons.leftpointarrow} Back</div>
                <h4>Edit Price</h4>
                </>:
                <>
                <h4>My Product Listing</h4>
                <button onClick={()=>navigate('/home/products/addproduct')}>{icons.plussymbol} Add a Product</button>
                </>
                }
                
            </div>
              { !isaddpage && <SearchBar/>}        
         </div>
        <Outlet/>
    </div>
    )
}

export default ProductLayout