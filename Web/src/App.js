// import logo from './logo.svg';
import './App.css';
import ListaNaKorisnici from './components/ListaNaKorisnici';
import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import KorisnikDetails from './components/KorisnikDetails';
import NewKorisnik from './components/NewKorisnik';
function App() {
 

  
  const [korisnici, setKorisnici] = useState([]);
  useEffect(()=>{
    //get request for the fixed korisnici
    axios.get(' https://dummyapi.io/data/v1/user', {
      headers:{
        'app-id':'6173fe8cb256a577407accbd'
      }
    }).then((response) =>{
        // setKorisnici([...korisnici.concat(response.data.data)])
        // fixedKorisnici.current = response.data.data;

        axios.get(' https://dummyapi.io/data/v1/user?created=1', {
          headers:{
            'app-id':'6173fe8cb256a577407accbd'
          }
        }).then((res) =>{
            // setKorisnici([...korisnici.concat(response.data.data)])
            // addedKorisnici.current = response.data.data;
            setKorisnici([...response.data.data.concat(res.data.data)])
        })
    });

    // get request for the added korisnici
   

  },[])
    // console.log("ilir = ",korisnici)
  return (
    <div className="App" style = {{width:"80%", margin:'auto'}}>
        <Router>
        <Switch> 
          <Route path = "/" exact  >  
        <ListaNaKorisnici korisnici = {korisnici}/>
        </Route>
        <Route path = "/details">
          <KorisnikDetails />
        </Route>
        <Route path = "/newkorisnik">
          <NewKorisnik />
        </Route>
        </Switch>
        </Router>
    
    </div>
  );
}

export default App;
