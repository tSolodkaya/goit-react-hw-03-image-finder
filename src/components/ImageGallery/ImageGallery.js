import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import imageApi from '../../services/images-api';

class ImageGallery extends Component {
  static propTypes = {
    imageName: PropTypes.string.isRequired,
    loading: PropTypes.func.isRequired,
    handleShowModal: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    showLoadMore: PropTypes.func.isRequired,
    saveError: PropTypes.func.isRequired,
  };

  state = {
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImageName = prevProps.imageName;
    const nextImageName = this.props.imageName;
    const prevPage = prevProps.page;
    const nextPage = this.props.page;

    if (prevImageName !== nextImageName) {
      this.setState({ images: [] });
    }

    if (prevImageName !== nextImageName || prevPage !== nextPage) {
      this.props.loading();

      imageApi
        .fetchImageByQuery(nextImageName, nextPage)
        .then(data => {
          if (data.total === 0) {
            return Promise.reject(
              new Error(`Sorry, we have no images with name ${nextImageName}.`)
            );
          }

          this.props.showLoadMore(data);

          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
          }));
        })
        .catch(error => this.props.saveError(error.message))
        .finally(() => {
          this.props.loading();
        });
    }
  }

  render() {
    const { images } = this.state;
    return (
      <>
        <ul className={css.ImageGallery}>
          {images.length > 0 &&
            images.map(image => (
              <ImageGalleryItem
                key={image.id}
                image={image}
                onClick={this.props.handleShowModal}
              ></ImageGalleryItem>
            ))}
        </ul>
      </>
    );
  }
}

export default ImageGallery;
