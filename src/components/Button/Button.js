import css from './Button.module.css';

const Button = ({ text }) => {
  return (
    <button className={css.Button} type="button">
      {text}
    </button>
  );
};

export default Button;
