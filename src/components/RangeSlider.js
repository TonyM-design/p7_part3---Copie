import React, { useEffect, useState } from "react";
import { Range } from 'rc-slider';
import { useSelector, useDispatch } from 'react-redux';
import 'rc-slider/assets/index.css'


const RangeSlider = () => {
  const dispatch = useDispatch();
  const activeStarFilter = useSelector(state => state.activeFilterByStars)

  function log(valuesRangeSlider) { 
    const minValue = valuesRangeSlider[0]
    const maxValue = valuesRangeSlider[1]
    dispatch({ type: 'APPLY_NEW_RANGE', payload: { min: minValue, max: maxValue } });

  }


  //TO DELETE
  const [checkboxIsActive, setCheckboxIsActive] = useState(activeStarFilter.activeFilterByStars) 

  useEffect(() => {
    setCheckboxIsActive(activeStarFilter.activeFilterByStars ? false : true);
  }, [activeStarFilter])


  return (
    <div className="range-slider">
      <Range disabled={!activeStarFilter.activeFilterByStars} min={1} max={5} dots step={1} defaultValue={[1, 5]} tipFormatter={value => `${value}%`} onAfterChange={log} />
    </div>
  );
}

export default RangeSlider;