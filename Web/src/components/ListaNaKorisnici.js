import React, { useEffect } from 'react'
import KorisnikRow from './KorisnikRow';
import {Link, useHistory, useLocation} from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";

function ListaNaKorisnici({korisnici}){
    console.log("korisnici = ", korisnici);
    const history = useHistory();
    useEffect(()=>{
        // history.go(0)
    }, [])
    return(

        <React.Suspense fallback = { <ClipLoader  loading={true}  size={150} />}>
        <div style = {{height:"90%", width:"100%"}}>
           <div style = {{display:'flex', justifyContent:"end"}}> <Link to = "/newkorisnik"><button style = {{backgroundColor:"green", color:'white', height:'3rem'}}>+Korisnik</button></Link></div>
            <table className = "table">
                <thead style = {{position:'sticky', top:'0px', backgroundColor:'white', zIndex:'100'}}>
                    <tr>
                        <th scope = "col">Nr.</th>
                    <th scope = "col">First Name</th>
                    <th scope = "col">Last Name</th>
                    <th scope = "col">Gender</th>
                    <th scope = "col">Details</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        korisnici.map((korisnik, index) =>{
                            return(
                                // <KorisnikRow  key = {index + 1} row = {index+1} firstname = {korisnik.firstName} lastname = {korisnik.lastName} gender = {korisnik.title == "mr" ? "Male" : "Female"}/>
                                <KorisnikRow  key = {index + 1} row = {index+1} korisnik = {korisnik}/>
                                )
                        })
                    }
                </tbody>
            </table>

        </div>
        </React.Suspense>
    )
}

export default ListaNaKorisnici;