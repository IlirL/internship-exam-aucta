import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import './KorisnikDetails.css'
import {Link} from 'react-router-dom'
import axios from 'axios';
import JSONPrettyMon from 'react-json-pretty/themes/monikai.css';
import JSONPretty from 'react-json-pretty';
import ClipLoader from "react-spinners/ClipLoader";

function KorisnikDetails(){
    
    const korisnik = useLocation().state.korisnik;
    const [detail, setDetail] = useState({})

        useEffect(()=>{
            axios.get(`https://dummyapi.io/data/v1/user/${korisnik.id}`, {
                headers:{
                    'app-id':'6173fe8cb256a577407accbd'
                  }
            }).then(res => {
                setDetail(res.data)
            })
        }, [])
   

        return(       
            <React.Fragment>
            
        
        <div style = {{ width:'fit-content', display:'flex', flexDirection:'column', alignItems:'flex-start', border:'1px solid black'}}>
        
            {detail.picture && <img src={detail.picture} alt="picture"  height = ""/>}
            <div className = "underlined-divs"><span>ID: </span>{korisnik.id}</div>
            <div className = "underlined-divs"><span>First name: </span>{detail.firstName}</div>
            <div className = "underlined-divs"><span>Last Name: </span>{detail.lastName}</div>
            {detail.gender && <div className = "underlined-divs"><span>Gender: </span>{detail.gender}</div>}
            <div className = "underlined-divs"><span>Email: </span>{detail.email}</div>
            {detail.phone && <div className = "underlined-divs"><span>Phone: </span>{detail.phone}</div>}
            {
                detail.location ? 
                <div className = "underlined-divs"><span>Location: </span>{detail.location.street} {detail.location.city} {detail.location.state} {detail.location.country}</div>                                    :
                                ""
                }
            
            <div className = "underlined-divs"><span>Registered Date: </span>{detail.registerDate}</div>
            <div className = "underlined-divs"><span>Updated Date: </span>{detail.updatedDate}</div>

            <div> <Link to = "/"><button style = {{width:"100%", marginTop:'2rem'}}>Get Back</button></Link></div>
        </div>
        
        </React.Fragment>
        )
        
           
            
            
        
            
}

export default KorisnikDetails