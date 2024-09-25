import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginLayout from './Layout/loginlayout/loginLayout';
import { Navigate } from 'react-router-dom';
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

function App() {
  const isVerified = () => {
    return localStorage.getItem('isVerified') === 'true';
  };
  const ProtectedRoute = ({ element }) => {
    return isVerified() ? element : <Navigate to="/stores" />;
  };
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" exact element={<LoginLayout/>}>
            <Route index exact  element={<LoginStart/>} />
            <Route path='login' exact element={<LoginForm/>} />
            <Route path='verify' element={<VerifyOtp/>}/>
            <Route path='stores' element={<ProtectedRoute element={<Stores/>}/>}/>
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
          <Route path='products' exact/>
          <Route path='profile'exact/>
         </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
