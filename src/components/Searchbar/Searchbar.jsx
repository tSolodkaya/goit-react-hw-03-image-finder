import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    inputSearch: '',
  };

  handleInputChange = event => {
    this.setState({ inputSearch: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.inputSearch);
    this.setState({ inputSearch: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
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
