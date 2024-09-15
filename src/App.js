import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginForm from './Components/loginform/loginform';
import LoginLayout from './Layout/loginLayout/loginLayout';
import LoginStart from './Components/loginStart/loginStart';
import VerifyOtp from './Components/verifyOTP/verifyOtp';
import { Navigate } from 'react-router-dom';

function App() {
  const isVerified = () => {
    return localStorage.getItem('isVerified') === 'true';
  };
  const ProtectedRoute = ({ element }) => {
    return isVerified() ? element : <Navigate to="/verify" />;
  };
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<LoginLayout/>}>
            <Route index element={<LoginStart />} />
            <Route path='login' element={<LoginForm />} />
            <Route path='verify' element={<VerifyOtp/>}/>
        </Route>
        <Route path='/register' element={<ProtectedRoute element={<LoginForm/>}/>}>
        
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
