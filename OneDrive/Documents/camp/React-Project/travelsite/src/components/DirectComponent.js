import React, { Component } from "react";

class Directory extends Component {
    constructor(props){
        super(props);
        this.state ={
            travelSite:[
            {
                id: 0,
                name: "Beach",
                image: "/assets/images/beach.jpeg",
                price: "$150 per day",
                featured: false,
                description:
                "Looking for Beach vacation",
            },
            {
                id: 1,
                name: "Europe",
                image: "/assets/images/greek.jpeg",
                price: "$100 per day",
                featured: false,
                description:
                "Europe.",
            },
            {
                id: 2,
                name: "Asia",
                image: "/assets/images/china.jpeg",
                price: "$100 per day",
                featured: false,
                description:
                "Asia",
            },
            {
                id: 3,
                name: "Activity",
                image: "/assets/images/paragliding-1219990_960_720.jpg",
                price: "$300 per day",
                featured: true,
                description:
                "Looking to book your activity",
            }
            ],
        };
    }
    render(){
        const directory = this.state.travelSite.map(travel => {
            return(
                <div key={travel.id} className="col ">
                    <img className="traverPic" src={travel.image} alt={travel.name} />
                    <h2>{travel.name}</h2>
                    <p>{travel.description}</p>
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        )
    }
}
  
    export default Directory;