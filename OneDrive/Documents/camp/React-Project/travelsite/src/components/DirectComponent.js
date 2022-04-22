import React, { Component } from "react";
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,CardLink} from "reactstrap";


class Directory extends Component {
    renderSelectedTravel(travel) {
        if(travel){
            return(
                <Card>
                    <CardImg top src={travel.image} alt={travel.name} />
                    <CardBody>
                        <CardTitle>{travel.name}</CardTitle>
                        <CardText>{travel.description}</CardText>
                        <CardLink href="#">See more</CardLink>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }
    render(){
        const directory = this.props.travels.map(travel => {
            return (
                <div key={travel.id} className="col-md-5 m-1 ">
                    <Card onClick={() => this.props.onClick(travel.id)}>
                        <CardImg width="100%" src={travel.image} alt={travel.name} />
                        <CardImgOverlay>
                            <CardTitle>{travel.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedTravel(this.state.selectedTravel)}
                    </div>
                </div>
            </div>
        )
    }
}
    
    export default Directory;