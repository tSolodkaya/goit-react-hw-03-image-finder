import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, children }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ul>
  );
};

export default ImageGallery;
