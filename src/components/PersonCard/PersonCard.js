import React from "react";


class PersonCard extends React.Component{
    render(){

        const {FirstName , LastName , age, HairColor, logo} = this.props
        return(
            <div className="card col-10 my-4 ">
                <div className="row align-items-center my-2 ">
                    <div className="col-8 ">
                        <h2>{LastName}, {FirstName} </h2>
                        <p><b>Edad:</b>{age}</p>
                        <p><b>Color de Cabello:</b>{HairColor}</p>
                    
                    </div>

                    <div className=" col-4">
                    <img src={logo}  width="250" height="200" />
                    
                    </div>
                
                </div>
                

            </div>
        )
    }
}

export default PersonCard;