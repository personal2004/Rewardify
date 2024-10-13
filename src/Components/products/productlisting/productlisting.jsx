import api from '../../../utils/apiinstance';
import { useEffect,useState} from 'react';
import {GET_LIST_PRODUCT} from '../../../utils/api';
import icons from '../../../icons/icons';
import style from './index.module.css';
import {useNavigate } from 'react-router-dom';
import AddStock from './addstock/addStock';
import MinusStock from './minusstock/minusStock';
import DeleteStock from './deletestock.jsx/deleteStock';
import { useDispatch } from 'react-redux';
import { setProduct } from '../../../utils/productSlice';
import { useSelector } from 'react-redux';
const ProductListing=()=>{

  const [showlist,setshowlist]=useState('');
  const [selectedValues, setSelectedValues] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const navigate=useNavigate();
  const productlist=useSelector((state)=>state.userproduct.product);

  const dispatch=useDispatch();

  const onClose=(e)=>{
      setShowModal(null)
      navigate('/home/products')
    } 
  const onCancel=(e)=>{
      setShowModal(null)
      navigate('/home/products')
    } 

  const getproducts=async()=>{
    try {
        const response = await api.post(GET_LIST_PRODUCT,{
          limit: 20, 
          pageNo: 1 ,
      });
      dispatch(setProduct(response?.data?.data));
      }catch (error) {
         console.error('Error generating OTP:', error);
      }      
    }

  const productcategory=productlist.reduce((acc,product)=>{
        const category=product.productCategory.name;
        if(!acc[category]){
            acc[category]=[]
        }
        acc[category].push(product)
        return acc
  },{})
  
  const handleChange = (event,product) => {
    const value = event.target.value;
    setSelectedValues(prev => ({
      ...prev,
      [product.name]: value
  }));
  setSelectedProduct(product);

    switch (value) {
        case '1':
            navigate('/home/products/addproduct', { state: { data: product } }); 
            break;
        case '2':
            setShowModal('addStock')
            break;
        case '3':
            setShowModal('minusStock')
            break;
        case '4':
            setShowModal('deleteProduct')
            break;
        default:
            break;
    }
};

  useEffect(()=>{
    if( localStorage.getItem('authToken')){
        getproducts()
    }
   },[])
    return(
       <>
        {showModal==='addStock' && <AddStock  show={showModal} onClose={onClose} onCancel={onCancel} product={selectedProduct} />}
        {showModal==='minusStock' && <MinusStock  show={showModal} onClose={onClose} onCancel={onCancel} product={selectedProduct} />}
        {showModal==='deleteProduct' && <DeleteStock  show={showModal} onClose={onClose} onCancel={onCancel}/>}
        <div className={style.ProductListing}>
          { Object.keys(productcategory).length > 0 &&
              Object.keys(productcategory).map(category=>(
                <div className={style.products} key={category}>
                    <h4>{category}</h4>
                {showlist===category ? <span onClick={()=>setshowlist('')}>{icons.deopuparrow}</span>:
                 <span onClick={()=>setshowlist(category)}>{icons.dropdownarrow}</span>}
                 {
                 showlist===category &&
                 <>
                 <div className={style.ProductListing_contents}>
                  <h6>Product Name</h6>
                  <h6>Price</h6>
                  <h6>Avail. Quantity</h6>
                  <h6>Availablity</h6>
                  <h6>Action</h6>
                 </div>
                 {productcategory[category].map(product => (
                  <div key={product.id} className={style.ProductDetails}>
                    <h5>{product.name}</h5>
                    <h5>$100</h5>
                    <h5>5&nbsp;&nbsp;(UOM: kg)</h5>
                    <h5>
                      <div className={style.avail_button}>
                        <div className={style.avail_status_yes}>
                        </div>
                      </div>
                    </h5>
                    <h5>
                    <select  value={selectedValues[product._id] || ""}  onChange={(e)=>handleChange(e,product)}>
                            <option value="" disabled selected hidden>Action</option>
                            <option value='1'class="custom-select-option">Edit price</option>
                            <option value='2'class="custom-select-option">Add Stock</option>
                            <option value='3'>Minus Stock </option>
                            <option value='4'>Delete product</option>
                      </select>
                    </h5>
                  </div>
                ))}
                 </>   
                 }
            </div>
            ))
          }
        </div>
        
        </>
    )
}

export default ProductListing