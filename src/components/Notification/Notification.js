import Notiflix from 'notiflix';

const Notification = ({ message, type }) => {
  return Notiflix.Notify[type](message);
};

export default Notification;
