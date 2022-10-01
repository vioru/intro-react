import { render } from "@testing-library/react";
import React from "react";
import PersonCard from "./components/PersonCard/PersonCard";





class App extends React.Component{

  render(){
    return(
      <div className="container  text-center">

        <PersonCard FirstName =' Jane' LastName ='Doe'  age ={' 45'}  HairColor=' Negro' logo="https://laboratoriosniam.com/wp-content/uploads/2018/07/Sintomas-premenopausia-como-combatirlos.jpg"/>
        <PersonCard FirstName =' Jhon' LastName ='Smith' age ={' 88'}  HairColor=' Cafe' logo="https://okdiario.com/img/2020/11/06/abuelo-655x368.jpg"/>
        <PersonCard FirstName =' Millard' LastName =' Fillmore' age ={' 50'}  HairColor=' Cafe' logo={"https://thumbs.dreamstime.com/b/de-la-demostraci%C3%B3n-feliz-sonriente-del-hombre-a%C3%B1os-blancos-agradable-y-expresi%C3%B3n-positiva-cara-aislada-en-fondo-gris-104102466.jpg"}/>
        <PersonCard FirstName ='Maria' LastName ='Smith' age ={' 62'}  HairColor=' Cafe' logo={"https://imgwoman.elperiodico.com/88/7c/89/actriz-sigourney-weaver-600.jpg"}/>
      </div>
    );

  }

}

export default App;
