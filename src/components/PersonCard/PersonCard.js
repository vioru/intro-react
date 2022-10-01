import React from "react";


class PersonCard extends React.Component{

    hizoClicEn = (e, name) => alert('Hiciste clic en: '+ name);

    hizoClic = ()=> alert("Hiciste click");

    increaseage =(e, age) =>{

        let newage = age +1;
        document.getElementById('changeAge').innerText = 'Edad: ' + newage
    }
    



    render(){

        const {name , age, city, logo} = this.props
        return(
            <div className="card col-10 my-2">
                <div className="row m-2">
                    <div className="col-8 ">
                        <h4>{name} </h4>
                        <p id="changeAge"><b>Edad:</b>{age}</p>
                        <p><b>Ciudad :</b>{city}</p>
                        <button className="btn btn-success" onClick={this.hizoClic}> Haz Click Aquí</button>
                        <button className="btn btn-warning" onClick={(e)=>this.hizoClicEn(e,name)}> Haz Click Aquí</button>
                        <button className="btn btn-danger" onClick={(e)=>this.increaseage(e,age)}> Aumenta tu Edad</button>
                    </div>

                    <div className=" col-4 ">
                    <img src={logo}  width="250" height="200" />
                    
                    </div>
                
                </div>
                

            </div>
        )
    }
}

export default PersonCard;