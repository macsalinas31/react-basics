import { Link } from "react-router-dom";

function Header (){
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">UNITED PHOTO ENTHUSIAST</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                    
                    <a className="nav-link active" aria-current="page" >Work</a>
                    <a className="nav-link active" aria-current="page" >About Us</a>
                    <a className="nav-link active" aria-current="page" >Hire Us</a>
                    
                </div>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Header;