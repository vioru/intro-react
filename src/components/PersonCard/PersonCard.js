import React from "react";


class PersonCard extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    cumpleaños = () => {
        this.setState({age:  parseInt(this.state.age)+1})
    } 

    render(){

        const {FirstName , LastName , age, HairColor, logo} = this.props
        return(
            <div className="card col-10 my-4 border-info ">
                <div className="row align-items-center my-2 ">
                    <div className="col-8 ">
                        <h2>{LastName}, {FirstName} </h2>
                        <p><b>Edad:</b>{this.state.age}</p>
                        <p><b>Color de Cabello:</b>{HairColor}</p>
                        <button className="btn btn-info" onClick={this.cumpleaños}>Botón de Cumpleaños {FirstName}</button>
                    
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