import { Component } from 'react';
import css from './App.module.css';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';

class App extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?key=14836280-095028a335045ad546bd82bf5&q=yellow+flowers&image_type=photo&page=1&per_page=12'
    )
      .then(response => response.json())
      .then(data => this.setState({ images: data.hits }));
  }

  render() {
    return (
      <div className={css.App}>
        <Searchbar />
        <ImageGallery images={this.state.images} />
        <Button text="Load More" />
      </div>
    );
  }
}

export default App;
