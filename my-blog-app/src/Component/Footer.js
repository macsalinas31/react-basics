

function Footer (){
    return (
      <>
      <div className="footer-main">
      <footer className="container-fluid bg-grey py-5">
<div className="container">
   <div className="row">
      <div className="col-md-6">
         <div className="row">
            <div className="col-md-6 ">
                <h2 className='company'>MACxSARAH</h2>
                 <p>Manila Philippines</p>
                 
            </div>
            <div className="col-md-6 px-4">
               <h5> United Photo Enthusiast</h5>
               <p><i>Member since 2009</i></p>
               
            </div>
         </div>
      </div>
      <div className="col-md-6">
         <div className="row">
            <div className="col-md-6 px-4">
               <h6> <i>Help us save the world by using recycable materials</i></h6>
               <div className="row ">
                  <div className="col-md-6">
                     <ul className="list">
                       
                     </ul>
                  </div>
               </div>
            </div>
            <div className="col-md-6 ">
               <h6>Newsletter?</h6>
               <div className="social">
               <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label2">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>
               </div>
               <button type="button" className="btn btn-secondary btn-sm">subscribe</button>
               <p><i>In the world of photography, you get to share a captured moment with other people.</i></p>
            </div>
         </div>
      </div>
   </div>
</div>
</footer>
</div>
      </>
    )
}
export default Footer;