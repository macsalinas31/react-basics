import { Link } from "react-router-dom";
import Body from './Body';

function Header (){
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"><Body/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                    
                    <Link to="/work" className="nav-link active" aria-current="page" >Work</Link>
                    <Link to="/about" className="nav-link active" aria-current="page" >About Us</Link>
                    <Link to="/hire" className="nav-link active" aria-current="page" >Hire Us</Link>
                    
                </div>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Header;