import style from './index.module.css';
import icons from '../../icons/icons';
import { useSelector ,useDispatch} from 'react-redux';
import { useEffect, useState } from 'react';
import { setProduct } from '../../utils/productSlice';

const SearchBar=()=>{
    const product=useSelector((state)=>state.userproduct.product);
    const dispatch=useDispatch();
    const [searchvalue,setsearchvalue]=useState('');
    const categoryproduct=product.filter((pro)=>{
        return pro?.productCategory?.name.toUpperCase()===searchvalue.toUpperCase()
    })
    useEffect(()=>{
     if (searchvalue) {
        const categoryproduct = product.filter((pro) => {
            console.log( pro?.productCategory?.name.toUpperCase()=== searchvalue.toUpperCase())
            return pro?.productCategory?.name.toUpperCase() === searchvalue.toUpperCase();
        });
      {categoryproduct.length>0 && dispatch(setProduct(categoryproduct));}
    }
    },[searchvalue])

    return(
        <div className={style.SearchBar}>
            <span>{icons.searchicon}</span>
            <input placeholder='Search for products' value={searchvalue} onChange={(e)=>setsearchvalue(e.target.value)}/>
        </div>
    )
}

export default SearchBar