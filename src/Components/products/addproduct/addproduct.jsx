import style from './index.module.css'
import ProductDetails from './productDetails/productDetails'
import ProductInfo from './productInfo/productInfo'
import DeliveryDetail from './deliveryDetail/deliveryDetail'
import ProductImg from './productImage/productImg'
import { useLocation } from 'react-router-dom'
import { ADD_STORE_PRODUCT } from '../../../utils/api'
import api from '../../../utils/apiinstance';
import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react'

const AddProduct=()=>{
    const location=useLocation()
    const {data}=location.state || {};
    const productDetailsRef = useRef();

    const productDetails={
        category:data?.productCategoryName,
        ProductName:data?.productName,
        ProductMRP:data?.originalPrice,
        Discounttype:data?.discountType,
        DiscountValue:data?.discountValue,
        ProductPrice:data?.price,
        UOM:data?.unitType,
        ProductSize:data?.unit,
        AvailableQuantity:data?.stock,
    }
    const handleSaveChanges=async()=>{
        const updatedProductDetails = productDetailsRef.current.values;
        try{
         const response=await api.post(ADD_STORE_PRODUCT,{
            "discountType":  Number(updatedProductDetails.Discounttype),
            "discountValue":  Number(updatedProductDetails.DiscountValue),
            "originalPrice": Number(updatedProductDetails.ProductMRP),
            "price":  Number(updatedProductDetails.ProductPrice),
            "product":uuidv4(),  // Replace with the actual product object ID
            "stock":Number(updatedProductDetails.AvailableQuantity),  
            "unit":   Number(updatedProductDetails.ProductSize),
            "unitType":  Number(updatedProductDetails.UOM),
          })
        }catch(error){
            console.log('Erro in Add Product',error)
        }

    }
    return(
        <div className={style.AddProduct}>
            <ProductDetails ref={productDetailsRef} productDetails={productDetails}/>
            <ProductInfo proInfo={data?.product?.productInformation}/>
            <div className={style.Product_purchase}>
             <DeliveryDetail/>
             <ProductImg img={data?.product?.images?.[0]}/>
            </div>
            <button className={style.save_change_button} onClick={handleSaveChanges}>Save Changes</button>
        </div>
    )
}

export default AddProduct