import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import LoginLayout from './Layout/loginlayout/loginLayout';
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
    console.log('useEffect called');
    if( localStorage.getItem('authToken')){
        getprofile()
    }
   },[])

  // const isVerified = () => {
  //   return localStorage.getItem('isVerified') === 'true';
  // };
  // const ProtectedRoute = ({ element }) => {
  //   return isVerified() ? element : <Navigate to="/stores" />;
  // };
  
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" exact element={<LoginLayout/>}>
            <Route index exact  element={<LoginStart/>} />
            <Route path='login' exact element={<LoginForm/>} />
            <Route path='verify' element={<VerifyOtp/>}/>
            {/* <Route path='stores' element={<ProtectedRoute element={<Stores/>}/>}/> */}
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
         <Route path='home' exact element={<HomeLayout/>}>
          <Route index exact element={<DashBoardLayout/>}/>
          <Route path='orders' exact/>
          <Route path='products' exact element={<ProductLayout/>}>
           <Route index exact element={<ProductListing/>}/>

          </Route>
          <Route path='profile'exact element={<ProfileLayout/>}>
            <Route index exact element={<ProfileDetail/>}/>
            <Route path='shopdetail' exact element={<ProfileShopDetail/>}/>
            <Route path='wallet' exact element={<Wallet/>}/>
            <Route path='aboutrewardify' exact element={<ProfileAbout/>}/>
            <Route path='logout' exact element={<LogOut/>}/>
          </Route>
         </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
