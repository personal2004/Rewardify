import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginLayout from './Layout/loginLayout/loginLayout';
import { Navigate } from 'react-router-dom';
import StoresStartLayout from './Layout/storeStartLayout/storeStartLayout';
import ContactForm from './Components/contactForm/contactForm';
import LoginForm from './Components/logincards/loginform/loginform';
import VerifyOtp from './Components/logincards/verifyOTP/verifyOtp';
import Stores from './Components/logincards/stores/stores';
import LoginStart from './Components/logincards/loginStart/loginStart';

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
        <Route path="/" element={<LoginLayout/>}>
            <Route index element={<LoginStart/>} />
            <Route path='login' element={<LoginForm/>} />
            <Route path='verify' element={<VerifyOtp/>}/>
            <Route path='stores' element={<ProtectedRoute element={<Stores/>}/>}/>
         </Route>
         <Route path='storestart' element={<StoresStartLayout/>}>
           <Route index element={<ContactForm/>}/>
         </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
