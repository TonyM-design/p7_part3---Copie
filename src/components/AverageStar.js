
    
        const AverageStar = (restaurant) => {
    const calculateRestaurantStarAverage = (valuesStarsList) => { 
        var numberOfRatings = valuesStarsList.length,
          totalRatingsValue = 0, i;
        for (i = 0; i < numberOfRatings; i++) {
          totalRatingsValue += Number(valuesStarsList[i]);
        }
        return totalRatingsValue / numberOfRatings;
      }
    

        const valuesStarsList = restaurant.ratings.map((rating) => rating.stars);
        const averageAmount = calculateRestaurantStarAverage(valuesStarsList)
        return (
          isNaN(averageAmount) ? "Aucun avis" : averageAmount
        )
      }

      export default AverageStar