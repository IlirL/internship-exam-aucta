import React from 'react'
import { Formik } from 'formik';
import axios from 'axios';
import {Link} from 'react-router-dom'

function NewKorisnik(){

function handleSubmit(e){
    e.preventDefault();
    // console.log(e.target[2].value);

const data = {
    firstName:e.target[0].value,
    lastName:e.target[1].value,
    email:e.target[2].value
}

    axios.post(' https://dummyapi.io/data/v1/user/create', data, {
        headers:{
          'app-id':'6173fe8cb256a577407accbd'
        }
    }
).then((res) =>{
        alert("You succesfully created new korisnik")
        window.location.reload();
        // console.log(res);
    
}).catch(e => {
    alert("Error while creating new korisnik")
})
}

    return(
        <div>
            <h1>Add New Korisnik</h1>
       <form onSubmit = {handleSubmit}>
        <div className="row">
            <div className="col">
              <input type="text" className="form-control" placeholder="First name" name = "firstName" required/>
            </div>
             <div class="col">
            <input type="text" className="form-control" placeholder="Last name" name = "lastName" required/>
            </div>
            <div className = "col"> <input type="email" className = "form-control" placeholder = "Email" name = "email" required/></div>
            <button  className = "col" type = 'submit' style = {{}}> Submit</button>
         </div>
        </form>
        <div> <Link to = "/"><button style = {{marginTop:'2rem'}}>Get Back</button></Link></div>
        </div>
    )
}

export default NewKorisnik;