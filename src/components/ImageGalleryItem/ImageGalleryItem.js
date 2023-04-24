import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className={css.ImageGalleryItem} onClick={onClick}>
      <img
        className={css.ImageGalleryItemImage}
        src={image.webformatURL}
        data-src={image.largeImageURL}
        alt={image.tags}
        loading="lazy"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
