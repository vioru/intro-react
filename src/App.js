import { render } from "@testing-library/react";
import React from "react";
import PersonCard from "./components/PersonCard/PersonCard";





class App extends React.Component{

  render(){
    return(
      <div className="container  text-center">

        <PersonCard FirstName =' Jane' LastName ='Doe'  age ={' 45'}  HairColor=' Negro' logo="https://laboratoriosniam.com/wp-content/uploads/2018/07/Sintomas-premenopausia-como-combatirlos.jpg"/>
        <PersonCard FirstName =' Jhon' LastName ='Smith' age ={' 88'}  HairColor=' Cafe' logo="https://okdiario.com/img/2020/11/06/abuelo-655x368.jpg"/>

      </div>
    );

  }

}

export default App;
