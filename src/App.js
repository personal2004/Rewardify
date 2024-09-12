import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginForm from './Components/loginform/loginform';
import LoginLayout from './Layout/loginLayout/loginLayout';
import LoginStart from './Components/loginStart/loginStart';
import VerifyOtp from './Components/verifyOTP/verifyOtp';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<LoginLayout/>}>
            <Route index element={<LoginStart />} />
            <Route path='login' element={<LoginForm />} />
            <Route path='verify' element={<VerifyOtp/>}/>
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
