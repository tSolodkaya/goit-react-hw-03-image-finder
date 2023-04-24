import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

const Notification = ({ message, type }) => {
  return Notiflix.Notify[type](message);
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Notification;
