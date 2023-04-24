import { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import Notification from 'components/Notification/Notification';
import imageApi from '../services/images-api';

class App extends Component {
  state = {
    imageName: '',
    loading: false,
    isShowModal: false,
    largeImage: '',
    isLoadMoreShow: false,
    page: 1,
    error: '',
  };

  handleFormSubmit = imageName => {
    this.setState({
      imageName,
      page: 1,
      error: '',
      images: [],
      isLoadMoreShow: false,
    });
  };

  toggleLoading = () => {
    this.setState(prevState => ({
      loading: !prevState.loading,
    }));
  };

  handleShowModal = event => {
    const largeImage = {
      largeImageURL: event.target.dataset.src,
      tags: event.target.alt,
    };

    this.setState({
      largeImage,
      isShowModal: true,
    });
  };

  handleCloseModal = event => {
    this.setState({ isShowModal: false });
  };

  handleShowLoadMoreBtn = data => {
    this.setState({
      isLoadMoreShow:
        this.state.page < Math.ceil(data.total / imageApi.PER_PAGE),
    });
  };

  handleIncrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleError = error => {
    this.setState({ error, isLoadMoreShow: false });
  };

  render() {
    const {
      loading,
      imageName,
      isShowModal,
      largeImage,
      isLoadMoreShow,
      page,
      error,
    } = this.state;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {loading && <Loader />}
        <ImageGallery
          imageName={imageName}
          loading={this.toggleLoading}
          handleShowModal={this.handleShowModal}
          page={page}
          showLoadMore={this.handleShowLoadMoreBtn}
          saveError={this.handleError}
        />
        {isShowModal && (
          <Modal image={largeImage} onClose={this.handleCloseModal} />
        )}
        {isLoadMoreShow && (
          <Button text="Load More" onClick={this.handleIncrementPage} />
        )}
        {error && <Notification message={error} type="failure" />}
      </div>
    );
  }
}

export default App;
