
import './App.css';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
   
    <GlobalStyle/>
  
   
    </Router>
  );
}

export default App;
