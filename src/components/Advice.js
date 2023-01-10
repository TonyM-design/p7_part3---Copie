import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const Advice = (props) => { // faire un choix sur advice vs ratings
    const stars = props.stars;

    const displayStars = (stars) => {
        let starsArrays = [];
        for (let i = 0; i < stars; i++) {
            starsArrays.push(`étoile ${i}`)
        }
        return starsArrays

    }

    const starsArrays = displayStars(stars)

    return (<div className='advice'>
        {starsArrays.map((starsArray, i) => { // rename le starsArray en star
            return (<FontAwesomeIcon key={i} icon={faStar} size="lg" color='gold' />)
        })}

        <p> {props.comment}</p>
    </div>
    )
}

export default Advice