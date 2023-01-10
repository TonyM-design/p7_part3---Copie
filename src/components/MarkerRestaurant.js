import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AverageStar from './AverageStar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const MarkerRestaurant = ({ restaurantInfo }) => { 
  const dispatch = useDispatch()
  const { selectedRestaurant } = useSelector(state => state.selectedRestaurant);


  function handleClick() {
    dispatch({ type: 'SELECT_RESTAURANT', payload: restaurantInfo })
    dispatch({ type: 'CLICK_ADD_RATING', payload: restaurantInfo })
  }

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltipMarker" {...props}>
      <b>{restaurantInfo.restaurantName} | {AverageStar(restaurantInfo)} <FontAwesomeIcon icon={faStar} size="1x" color='gold' /></b>
    </Tooltip>
  );

  const getRestaurantSelectedClass = (selectedRestaurant, restaurantInfo) => {
    if (selectedRestaurant !== null && (selectedRestaurant.restaurantName === restaurantInfo.restaurantName)) {
      return 'selectedRestaurantMarker'
    }
    else return 'restaurantMarker'
  }

  return (
    <div className={getRestaurantSelectedClass(selectedRestaurant, restaurantInfo)}>
      <OverlayTrigger
        placement="right"
        delay={{ show: 100, hide: 100 }}
        overlay={renderTooltip}
      >
        <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" onClick={handleClick} />
      </OverlayTrigger>
    </div>
  )


}

export default MarkerRestaurant;