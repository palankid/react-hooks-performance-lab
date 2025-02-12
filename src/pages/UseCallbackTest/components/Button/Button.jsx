import { memo } from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button
      className={`text-[10px] rounded-none p-0 m-0 w-10 h-8 bg-slate-500 text-white`}
      onClick={onClick}
    >
      click
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default {
  ButtonMemoized: memo(Button),
  ButtonNonMemoized: Button,
}
