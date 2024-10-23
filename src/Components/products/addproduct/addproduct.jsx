import style from './index.module.css'
import ProductDetails from './productDetails/productDetails'
import ProductInfo from './productInfo/productInfo'
import DeliveryDetail from './deliveryDetail/deliveryDetail'
import ProductImg from './productImage/productImg'
import { useLocation, useNavigate } from 'react-router-dom'
import { ADD_STORE_PRODUCT,GET_LIST_PRODUCT,EDIT_PRODUCT } from '../../../utils/api'
import api from '../../../utils/apiinstance';
import { useEffect, useRef, useState} from 'react'

const AddProduct=()=>{

    const location=useLocation()
    const {data}=location.state || {};
    const productDetailsRef = useRef();
    const navigate=useNavigate()
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [allproductoption,setallproductoption] = useState([]);
    const [listallproduct,setlistallproduct]=useState([]);
    const [productName, setproductName] = useState(data?.product?._id || '');

    const [product,setproduct]=useState();
    
    const productDetails={
        category:data?.productCategory?.name,
        ProductName:data?.product?._id,
        ProductMRP:data?.originalPrice,
        Discounttype:data?.discountType,
        DiscountValue:data?.discountValue,
        ProductPrice:data?.price,
        UOM:data?.unitType,
        ProductSize:data?.unit,
        AvailableQuantity:data?.stock,
    }

    const handleproductChange = (fieldNamevalue) => {
        setproductName(fieldNamevalue);
        const produc=listallproduct.filter((pro)=>pro?._id===fieldNamevalue);
        setproduct(produc[0])
        console.log(product)
      };

    useEffect(() => {
        if (productName && listallproduct.length > 0) {
          handleproductChange(productName);
        }
      }, [listallproduct]);

    const handleSaveChanges=async()=>{
        const updatedProductDetails = productDetailsRef.current.values;
        setproductName(updatedProductDetails.ProductName);
       if(!data){
            try{
            const response=await api.post(ADD_STORE_PRODUCT,{
                "discountType":  Number(updatedProductDetails.Discounttype),
                "discountValue":  Number(updatedProductDetails.DiscountValue),
                "originalPrice": Number(updatedProductDetails.ProductMRP),
                "price":  Number(updatedProductDetails.ProductPrice),
                "product":updatedProductDetails.ProductName,
                "stock":Number(updatedProductDetails.AvailableQuantity),  
                "unit":   Number(updatedProductDetails.ProductSize),
                "unitType":  Number(updatedProductDetails.UOM),
              })
               navigate(-1)
            }catch(error){
                console.log('Erro in Add Product',error)
            }

        }else{
            
          try{
            const response=await api.patch(`${EDIT_PRODUCT}${data?._id}`,{
                "discountType":  Number(updatedProductDetails.Discounttype),
                "discountValue":  Number(updatedProductDetails.DiscountValue),
                "originalPrice": Number(updatedProductDetails.ProductMRP),
                "price":  Number(updatedProductDetails.ProductPrice),
                "product":updatedProductDetails.ProductName,
                "stock":Number(updatedProductDetails.AvailableQuantity),  
                "unit":   Number(updatedProductDetails.ProductSize),
                "unitType":  Number(updatedProductDetails.UOM),
              })
              navigate(-1)
            }catch(error){
                console.log('Erro in Add Product',error)
            }
            
        }
    }

    useEffect(()=>{
      
        const getallproducts=async()=>{
            try{
                const response=await api.post(GET_LIST_PRODUCT);
                setlistallproduct(response?.data?.data)

               const allproduct=response?.data?.data.map((product,name)=>({
                    key: product?.name,
                    value:product?._id,
               }));
               allproduct.unshift({ key:'Product Name', value: '0'});
               setallproductoption(allproduct)

                const uniqueCategories = new Set();
                response?.data?.data.forEach(product => {
                    if (product?.productCategory?.name) {
                      uniqueCategories.add(product?.productCategory?.name);
                    }
                  });
                const CategoryOptions = Array.from(uniqueCategories).map((category, index) => ({
                    key: category,
                    value:category,
                  }));
                  CategoryOptions.unshift({ key: 'Select related Category', value: '0' });
                  setCategoryOptions(CategoryOptions);

            }catch(error){
                console.log('Error in getting all Product',error)
            }
        }

        getallproducts()
    
    },[])

    return(
        <div className={style.AddProduct}>
            <ProductDetails ref={productDetailsRef} locationdata={data} editproductDetails={productDetails} handleproductChange={handleproductChange} productoption={allproductoption} CategoryOptions={categoryOptions}/>
            <ProductInfo proInfo={product?.productInformation}  locationdata={data}/>
            <div className={style.Product_purchase}>
             <DeliveryDetail/>
             <ProductImg img={product?.images?.[0]}  locationdata={data}/>
            </div>
            <button className={style.save_change_button} onClick={handleSaveChanges}>Save Changes</button>
        </div>
    )
}

export default AddProduct