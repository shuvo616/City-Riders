import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import data from '../../data.json'
import map from '../../images/Map.png'
import logo from '../../images/peopleicon.png'
import GoogleMap from '../GoogleMap/GoogleMap';
import { UserLocation } from '../SearchArea/SearchArea';
import './Destination.css'




const Destination = () => {
    //    const [destination, setDestination] = useContext(UserLocation);
    const { id } = useParams();
    const [vehicle, setVehicle] = useState({});

    useEffect(() => {
        setVehicle(data[id])
    })
    return (
        <div className="container" >
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <div className="searchField">

                        <div className="searchContent">
                            <img src={vehicle.image} alt="" />
                            <p>{vehicle.name}</p>
                            <img className="desLogo" src={logo} alt="" />
                            <h5>4</h5>
                            <h4>${vehicle.price}</h4>
                        </div>

                        <div className="searchContent">
                            <img src={vehicle.image} alt="" />
                            <p>{vehicle.name}</p>
                            <img className="desLogo" src={logo} alt="" />
                            <h5>4</h5>
                            <h4>${vehicle.price}</h4>
                        </div>

                        <div className="searchContent">
                            <img src={vehicle.image} alt="" />
                            <p>{vehicle.name}</p>
                            <img className="desLogo" src={logo} alt="" />
                            <h5>4</h5>
                            <h4>${vehicle.price}</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col-sm-12">
                    <div className="mapSection">
                        <img src={map} alt=""/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;