import React ,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import InfoRestaurants from './InfoRestaurant.js';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'



function AsideRestaurantsList({ restaurantLists }) { // rename poru signifier le conteneur d'une liste de restaurant

  const selectedRestaurantReducer = useSelector(state => state.selectedRestaurant)
  const dispatch = useDispatch()

  const selectRestaurantOnAside = (restaurant) => {
        dispatch({ type: 'SELECT_RESTAURANT', payload: restaurant})
  }


  
  return (
    <div>
      {restaurantLists.map((restaurant, i) => {
        return (
          <Accordion defaultActiveKey="0" key={i} className='col-lg-12'   >
            <Card   >
              <Accordion.Toggle onClick={() =>selectRestaurantOnAside(restaurant)} className={restaurant === selectedRestaurantReducer.selectedRestaurant ? "selectedRestaurant" : "nothing"}   as={Card.Header} eventKey="1">
                <h6>{restaurant.restaurantName}</h6>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <InfoRestaurants restaurant={restaurant} key={i}></InfoRestaurants>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        );
      }
      )
      }</div>
  )
}

export default AsideRestaurantsList;

