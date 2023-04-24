import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, showModal }) => {
  return (
    <>
      <ul className={css.ImageGallery}>
        {images.length > 0 &&
          images.map(image => (
            <ImageGalleryItem
              key={image.id}
              image={image}
              onClick={showModal}
            ></ImageGalleryItem>
          ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default ImageGallery;
