import { useState } from "react";
import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";

function Searchbar({ onSubmit }) {
  const [pictureName, setPictureName] = useState("");

  const handlePictureNameChange = (e) => {
    setPictureName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pictureName.trim() === "") {
      alert("введите слово");
      return;
    }
    onSubmit(pictureName);
    setPictureName("");
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          onChange={handlePictureNameChange}
          className={styles.SearchFormInput}
          value={pictureName}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
