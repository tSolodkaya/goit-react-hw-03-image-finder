import PropTypes from 'prop-types';
import { Component } from 'react';
import Notiflix from 'notiflix';
import Loader from 'components/Loader/Loader';

import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    error: null,
  };
  componentDidUpdate(prevProps, nextProps) {
    const prevImageName = prevProps.imageName;
    const nextImageName = this.props.imageName;

    if (prevImageName !== nextImageName) {
      this.setState({ loading: true, images: null });
      fetch(
        `https://pixabay.com/api/?key=14836280-095028a335045ad546bd82bf5&q=${nextImageName}&image_type=photo&page=1&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`Sorry, we have no images with name ${nextImageName}.`)
          );
        })
        .then(data => {
          if (data.total === 0) {
            return Promise.reject(
              new Error(`Sorry, we have no images with name ${nextImageName}.`)
            );
          }
          this.setState({ images: data.hits });
        })
        .catch(error => this.setState({ error: error.message }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }
  render() {
    const { images, loading, error } = this.state;
    if (error) {
      return Notiflix.Notify.failure(error);
    }
    return (
      <>
        {loading && <Loader />}
        <ul className={css.ImageGallery}>
          {images &&
            images.map(image => (
              <ImageGalleryItem key={image.id} image={image} />
            ))}
        </ul>
      </>
    );
  }
}

export default ImageGallery;
