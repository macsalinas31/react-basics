import {Link} from 'react-router-dom'

function Notfound (){
    return (
        <>
        <div className="not-found">
            <div className="error-main">
                <p>404:</p>
            </div>
            <div className="error-body">
                <p>your mama misses you so much!</p>
            </div>
                <div className="link-notfound">

                <button type="button" class="btn btn-outline-warning"><Link to="/">Go Back to your Mama</Link></button>
                
                
                </div>
       </div>
        </>
    )
}
export default Notfound