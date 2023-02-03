import ShopHeader from '../../components/Shop/Shopheader';
import ShopFooter from '../../components/Shop/ShopFooter';
import {Outlet} from 'react-router-dom';


function ShopLayout (){
    return(
        <>
        <ShopHeader />
            <Outlet />
        <ShopFooter />
        </>
    )
}
export default ShopLayout;