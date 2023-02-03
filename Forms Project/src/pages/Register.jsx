import { useState } from "react";


const Register = () => {

    const [formData, setFormData] = useState ({
        firstname : '',
        lastname : '',
        username : '',
        password : '',
        gender : '',
        techstack : []
    })

    const handleOnChange = (event) => {
        if(event.target.name === 'techstack') {
            let copy = {...formData}
        // console.log(event.target)

            if(event.target.checked){
                copy.techstack.push(event.target.value)
            }else{
                copy.techstack = copy.techstack.filter(e => e !== event.target.value)
            }   
                // console.log(copy)
                setFormData(copy)
        }else {
        setFormData(() => ({
            ...formData,
            [event.target.name] : event.target.value
            
        }))
    }
        // console.log(formData)
    }

    const submitForm = () => {
        event.preventDefault()
        console.log(formData)
    }
        
        return (
            <div className="main-input"> 
        <form>
            
            <h1 className="header">Mag Type ka..Type mo?</h1>
            <div className="form-group">
            <label htmlFor="firstname">First Name:
                <input name="firstname" type="text" placeholder="First Name" onChange={handleOnChange} className="form-control"></input>
            </label>
            </div>

            <div className="form-group">
            <label htmlFor="lastname">Last Name:
                <input name="lastname" type="text" placeholder="Last Name" onChange={handleOnChange} className="form-control"></input>
            </label>
            </div> 

            <div className="form-group">
            <label htmlFor="username">User Name:
                <input name="username" type="text" placeholder="First username" onChange={handleOnChange} className="form-control"></input>
            </label>
            </div> 
            
            <div className="form-group">
            <label htmlFor="password">Password:
                <input name="password" type="text" placeholder="First password"onChange={handleOnChange} className="form-control "></input>
            </label>
            </div> 
                <br></br>
            <div>
                <select name="gender" class="form-control"  onChange={handleOnChange}>
                    <option>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="female">female</option>
                    <option value="Prefer Not to say">Prefer not to say</option>
                </select>
            </div> 

            <div className="check">
                <input className="form-check-input" name="techstack" type="checkbox" value="HTML"onChange={handleOnChange} ></input>
                <label className="form-check-label" htmlFor="techStack">
                    HTML
                </label>
                
                <input className="form-check-input" name="techstack" type="checkbox" value="CSS" onChange={handleOnChange}></input>
                <label className="form-check-label" htmlFor="techStack">
                    CSS
                </label>
                <input className="form-check-input" name="techstack" type="checkbox" value="JAVASCRIPT" onChange={handleOnChange}></input>
                <label className="form-check-label" htmlFor="techStack">
                    JAVASCRIPT
                </label>
                <input className="form-check-input" name="techstack" type="checkbox" value="ReactJS" onChange={handleOnChange}></input>
                <label className="form-check-label" htmlFor="techStack">
                    ReactJS
                </label>
            </div>
            
            <div className="submit-button">
            <button className="btn btn-secondary"  onClick={submitForm}>Submit</button>
            </div>
            </form>
            
        </div>
    )
}

export default Register;