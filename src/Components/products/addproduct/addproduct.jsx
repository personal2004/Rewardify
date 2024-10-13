import style from './index.module.css'
import ProductDetails from './productDetails/productDetails'
import ProductInfo from './productInfo/productInfo'
import DeliveryDetail from './deliveryDetail/deliveryDetail'
import ProductImg from './productImage/productImg'
import { useLocation } from 'react-router-dom'
const AddProduct=()=>{
    const location=useLocation()
    const {data}=location.state || {};

    return(
        <div className={style.AddProduct}>
            <ProductDetails proDetails={data}/>
            <ProductInfo proInfo={data?.productInformation}/>
            <div className={style.Product_purchase}>
             <DeliveryDetail/>
             <ProductImg img={data?.images[0]}/>
            </div>
        </div>
    )
}

export default AddProduct