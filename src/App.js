import { render } from "@testing-library/react";
import React from "react";
import FirstComponent from "./components/firstComponent/firstComponent";
import PersonCard from "./components/PersonCard/PersonCard";
import logo1 from '../src/components/PersonCard/91b7feb212a0bd47c8331ccd23e61655.jpg';
import logo2 from '../src/components/PersonCard/MD1-UPF112221-TP.jpg';
import logo3 from '../src/components/PersonCard/juana_de_arco_2.jpg';

class App extends React.Component{

  render(){
    return(
      <div className="container ">
        <h1> Mi primera Aplicación con React</h1>
        <h2> holiiiii </h2>
        <FirstComponent />
        <PersonCard name ='Elena de Troya'  age ={' 30'}  city=' Roma' logo={logo1}/>
        <PersonCard name ='Cleopatra'  age ={' 25'}  city=' Alejandria' logo={logo2}/>
        <PersonCard name ='Juana de Arco' age ={' 19'}  city=' Domrémy' logo={logo3}/>
      </div>
    );

  }

}

export default App;
