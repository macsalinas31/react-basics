import Count from "../Count"
import Login from "./Login"
import {useOutletContext} from 'react-router-dom'
// import Carousel from "./Carousel"


function Main() {
    const user = useOutletContext()
    return(
        <>
        Hello, {user.name}
        <div className="main-body">
            <div className="row">
                <div className="col-8" >
                 
                </div>
                <div className="col-4">
                
                    <Login />
                </div>
                
               <div>
                <h1 style={{color: 'white'}}>United Photo Enthusiast</h1>
                <h4 style={{color: 'white'}}>
                "Every picture has it's own story"
                </h4>
               </div>
               <div>
                
               </div>
            </div>
          
         </div>
        
         </>
    ) 
}

export default Main;