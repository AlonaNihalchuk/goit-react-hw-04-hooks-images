import React, { Component } from "react";
import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    pictureName: "",
  };

  handlePictureNameChange = (e) => {
    this.setState({
      pictureName: e.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.pictureName.trim() === "") {
      alert("введите слово");
      return;
    }
    this.props.onSubmit(this.state.pictureName);
    this.setState({ pictureName: "" });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            onChange={this.handlePictureNameChange}
            className={styles.SearchFormInput}
            value={this.state.pictureName}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
