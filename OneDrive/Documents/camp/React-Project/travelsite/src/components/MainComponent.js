import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Directory from "./DirectComponent";
import { TRAVELSITE } from "../shared/travelsite";

class Main extends Component {
    constructor(props) {
        super();
        this.state = {
            travels: TRAVELSITE,
            selectedTravel: null,
        };
    }
    onTravelSelect(travelId){
        this.setState({selectedTravel: travelId});
    }
    render() {
        return (
        <div>
            <Navbar dark>
            <div className="container">
                <NavbarBrand href="/">Travel with me</NavbarBrand>
            </div>
            </Navbar>
            <Directory travels={this.state.travels} onClick={travelId => this.onTravelSelect(travelId)} />
        </div>
        );
    }
}

export default Main;
