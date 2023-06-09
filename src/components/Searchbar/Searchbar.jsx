import { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import Notiflix from 'notiflix';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    inputSearch: '',
  };

  handleInputChange = event => {
    this.setState({ inputSearch: event.target.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.inputSearch.trim() === '') {
      return Notiflix.Notify.warning(
        'Please, type what images do you want to find =)'
      );
    }
    this.props.onSubmit(this.state.inputSearch);
    this.setState({ inputSearch: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.handleSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <FaSearch />
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleInputChange}
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputSearch}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
