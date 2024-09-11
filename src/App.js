import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginPage from './Pages/loginpage/login';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}>    
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
