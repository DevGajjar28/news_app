import { Route } from 'react-router-dom';
import './App.css';
import DetailPage from './Pages/DetailPage';
import Home from './Pages/Home';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
    <Navbar />
    
      <Route path='/' component={Home} exact />
      <Route path="/article/:articleId" component={DetailPage} />

    </>

  );
}

export default App;
