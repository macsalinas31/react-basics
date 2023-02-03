import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Outlet} from "react-router-dom"


function MainLayout (){
    return (
        <>
            <Header />
                <Outlet context= {{name: 'Mac Smooth', address: 'Jan Lang', age: 'Secret'}} />
            <Footer />
        </>
    )
}

export default MainLayout;