import { useCallback } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button';
import { useMeasure } from '../useMeasure';
import { useDisplayValue } from '../useDisplayValue';


const Optimized = ({ val, shouldMeasure, onMeasure }) => {
  useMeasure(shouldMeasure, onMeasure);
  const displayValue = useDisplayValue(val);

  const handleClick = useCallback(() => {
    console.log('You clicked me');
  }, []);

  return (
    <div className="flex flex-row w-36 items-center gap-0.5">
      <Button.ButtonMemoized onClick={handleClick} />
      <span className="text-[20px]">{displayValue}</span>
    </div>
  );
};

Optimized.propTypes = {
  val: PropTypes.number.isRequired,
  shouldMeasure: PropTypes.bool.isRequired,
  onMeasure: PropTypes.func.isRequired,
};

export default Optimized;
