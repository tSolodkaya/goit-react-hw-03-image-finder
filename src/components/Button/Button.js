import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ onClick, text }) => {
  return (
    <div className={css.container}>
      <button onClick={onClick} className={css.Button} type="button">
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
