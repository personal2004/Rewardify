import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import LoginLayout from './Layout/loginPagelayout/loginLayout';
import StoresStartLayout from './Layout/storeStartLayout/storeStartLayout';
import LoginForm from './Components/logincards/loginform/loginform';
import VerifyOtp from './Components/logincards/verifyOTP/verifyOtp';
import Stores from './Components/logincards/stores/stores';
import LoginStart from './Components/logincards/loginStart/loginStart';
import StoreCreateLayout from './Layout/storeCreateLayout/storeCreateLayout';
import ContactForm from './Components/storeStart/contactForm/contactForm';
import GetContactids from './Components/storeStart/oncontactsubmit/getContact';
import StoreInfo from './Components/storeCreate/storeinfo/storeinfo';
import StoreDoc from './Components/storeCreate/storedoc/storedoc';
import StoreAgree from './Components/storeCreate/storeagree/storeagree';
import HomeLayout from './Layout/homelayout/homeLayout';
import DashBoardLayout from './Layout/dashboardlayout/dashboardLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from './utils/apiinstance';
import { GET_USER_PROFILE } from './utils/api';
import {useDispatch } from 'react-redux';
import { setUser } from './utils/userSlice';
import { useEffect} from 'react';
import ProfileLayout from './Layout/profilelayout/profileLayout';
import ProfileDetail from './Components/profile/profileDetail/profileDetail';
import ProfileShopDetail from './Components/profile/shopDetail/shopDetail';
import LogOut from './Components/profile/logout/logOut';
import Wallet from './Components/profile/wallet/wallet';
import ProfileAbout from './Components/profile/aboutrewar/aboutrewardify';
import ProductLayout from './Layout/productLayout/productLayout';
import ProductListing from './Components/products/productlisting/productlisting';
import AddProduct from './Components/products/addproduct/addproduct';
import { Navigate } from 'react-router-dom';
import NotFound from './Layout/notauthorizedLayout/notFound';
import OrderLayout from './Layout/ordersLayout/orderLayout';
import ConfirmOrders from './Components/orders/confirm/confirmorder';
import PrepareOrders from './Components/orders/prepare/prepareOrder';
import PackOrder from './Components/orders/pack/pack';
import CompleteOrder from './Components/orders/complete/complete';
import Settlement from './Components/payment/settlement/settlement';

function App() {

 const dispatch=useDispatch();
  const getprofile=async()=>{
    try {
        const response = await api.get(GET_USER_PROFILE);
        dispatch(setUser(response?.data));

      }catch (error) {
         console.error('Error generating OTP:', error);
      }      
    }

  useEffect(()=>{
    if( localStorage.getItem('authToken')!==''){
        getprofile()
    }
   },[])

  const isVerified = () => {
    return localStorage.getItem('authToken') !=='';
  };

  const ProtectedRoute = ({ element }) => {
     return isVerified() ? element : <Navigate to="/" />;
  };
  
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" exact element={<LoginLayout/>}>
            <Route index exact  element={<LoginStart/>} />
            <Route path='login' exact element={<LoginForm/>} />
            <Route path='verify' element={<VerifyOtp/>}/>
            <Route path='stores' element={<Stores/>}/>
         </Route>
         <Route path='storestart' exact element={<StoresStartLayout/>}>
           <Route index exact element={<ContactForm/>}/>
           <Route path='contactids' element={<GetContactids/>}/>
         </Route>
         <Route path='storeCreation'exact element={<StoreCreateLayout/>}>
           <Route index exact element={<StoreInfo/>}/>
           <Route path='storedocs' exact element={<StoreDoc/>}/>
           <Route path='storeAgeement' exact element={<StoreAgree/>}/>
         </Route>
         <Route path='home' exact element={<ProtectedRoute element={<HomeLayout/>}/>}>
            <Route path='/home' exact element={<DashBoardLayout/>}>
                <Route path='prepare'/>
                <Route path='pack' />
                <Route path='complete'/>
                <Route path='settlement' element={<Settlement/>}/>
            </Route>
            <Route path='orders' exact element={<OrderLayout/>}>
               <Route index exact element={<ConfirmOrders/>}/>
               <Route path='prepare' element={<PrepareOrders/>}/>
               <Route path='pack' element={<PackOrder/>}/>
               <Route path='complete' element={<CompleteOrder/>}/>
            </Route>
            <Route path='products' exact element={<ProductLayout/>}>
              <Route index exact element={<ProductListing/>}/>
              <Route path='addproduct' element={<AddProduct/>}/>
            </Route>
            <Route path='profile'exact element={<ProfileLayout/>}>
              <Route index exact element={<ProfileDetail/>}/>
              <Route path='shopdetail' exact element={<ProfileShopDetail/>}/>
              <Route path='wallet' exact element={<Wallet/>}/>
              <Route path='aboutrewardify' exact element={<ProfileAbout/>}/>
              <Route path='logout' exact element={<LogOut/>}/>
            </Route>
         </Route>
         <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
