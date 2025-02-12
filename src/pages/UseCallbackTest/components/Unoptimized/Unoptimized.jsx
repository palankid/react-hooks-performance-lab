import PropTypes from 'prop-types';

import { Button } from '../Button';
import { useMeasure } from '../useMeasure';
import { useDisplayValue } from '../useDisplayValue';

const Unoptimized = ({ val, shouldMeasure, onMeasure }) => {
  useMeasure(shouldMeasure, onMeasure);
  const displayValue = useDisplayValue(val);

  const handleClick = () => {
    console.log('You clicked me');
  };

  return (
    <div className="flex flex-row w-36 items-center gap-0.5">
      <Button.ButtonNonMemoized onClick={handleClick} />
      <span className="text-[20px]">{displayValue}</span>
    </div>
  );
};

Unoptimized.propTypes = {
  val: PropTypes.number.isRequired,
  shouldMeasure: PropTypes.bool.isRequired,
  onMeasure: PropTypes.func.isRequired,
};

export default Unoptimized;
