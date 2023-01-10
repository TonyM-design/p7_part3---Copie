import React from "react";
import RatingsDisplay from './RatingsDisplay';
import Button from 'react-bootstrap/Button';
import AverageStar from './AverageStar'
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Inforestaurant = (props) => {
    console.log(props.restaurant.adresse)
    const lat = props.restaurant.lat;
    const lng = props.restaurant.long;

    const createStreetViewLink = (lat, lng) => {
        let streetViewLink = `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${lat},${lng}&fov=80&heading=70&pitch=0&key=AIzaSyCN5UCQGiOHjAI4_RCdZ-2Yuug2-4JYTzs`
        return (streetViewLink)
    }

    const dispatch = useDispatch()
    const ratingIsActive = () => {
        dispatch({ type: 'CLICK_ADD_RATING' })
        dispatch({ type: 'SELECT_RESTAURANT', payload: props.restaurant })
    }
    return (
        <div className='asideInfoElementList'>
            <h4>{props.restaurant.restaurantName}</h4>
            <p>Note globale : {AverageStar(props.restaurant)} <FontAwesomeIcon icon={faStar} size="1x" color='gold' /></p>
            <p> {props.restaurant.address}</p>
            <p> {props.restaurant.adresse}</p>
            <img className='imgStreetView' src={createStreetViewLink(lat, lng)}></img>
            {RatingsDisplay(props.restaurant.ratings)}
            <hr></hr>
            <Button variant="outline-secondary" onClick={ratingIsActive} > ajouter un avis </Button>
        </div>
    );
}

export default Inforestaurant;