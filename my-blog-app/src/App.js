
import Main from './Component/Main';
import AboutUs from './Pages/AboutUs'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Body from './Component/Body'
import Work from './Pages/Work';
import HireUs from './Pages/Hire';
import MainLayout from './Pages/Layout/MainLayout';
import './Css/mainbody.css'
import './Css/inquire.css'
import './Css/body.css'
import './Css/navbar.css'
import './Css/footer.css'
import './Css/form.css'
import { Routes, Route, Link } from 'react-router-dom';
import Inquire from './Component/Inquire';





function App() {
  return (
    <>
  
    <Header></Header>
    <Body></Body>
    <Main></Main>
    <Footer></Footer>
    
    </>
  );
}

export default App;
