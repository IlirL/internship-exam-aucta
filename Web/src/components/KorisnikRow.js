import React from 'react'
import {Link} from 'react-router-dom'
// import './KorisnikRow.css'
function KorisnikRow({row, korisnik}){
    return(
         <tr>
             <th scope = "row">{row}</th>
           <td>{korisnik.firstName}</td>
           <td>{korisnik.lastName}</td>
           <td>{korisnik.title == "mr" ? "Male" : "Female"}</td>
           <td style = {{display:'flex', justifyContent:'center', alignItems:'center'}}>
               <Link to = {{
                   pathname:'/details',
                   state:{
                       korisnik:korisnik
                   }
               }} 
               style = {{height:"10%", width:'5%', display:'flex', justifyContent:'center',alignItems:'center', textDecoration:'none'}}
               >
               <button>+</button>
               </Link>
            </td>
        </tr>
    )
}

export default KorisnikRow;