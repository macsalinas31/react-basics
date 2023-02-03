import Header from "../../Component/Header";
import Footer from '../../Component/Footer'
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";


function MainLayout (){
    return (
        <>
            <Header />
                <Outlet/>
            <Footer />
        </>
    )
}
export default MainLayout;