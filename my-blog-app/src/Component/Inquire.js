

function Inquire () {
    return(
        <>
        <form className="form-main">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="full-name" class="form-control" id="exampleFormControlInput1" placeholder="your fullname"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                <textarea class="form-control" id="message" rows="3"></textarea> <br></br>
                <div class="d-grid gap-2 col-6 mx-start"> </div>
            <button class="btn btn-primary" type="button">Inquire now</button>
            </div>
           
        </form>
        </>
    )
}
export default Inquire;