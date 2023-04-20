import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={image.webformatURL}
        alt={image.tags}
      />
    </li>
  );
};

export default ImageGalleryItem;
