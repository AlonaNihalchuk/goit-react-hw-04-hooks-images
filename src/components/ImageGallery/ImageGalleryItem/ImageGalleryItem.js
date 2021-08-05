import React, { Component } from "react";
import styles from "./ImageGalleryItem.module.css";
// import PropTypes from "prop-types";

class ImageGalleryItem extends Component {
  // static propTypes = {
  //   webformatURL: PropTypes.string.isRequired,
  //   largeImageURL: PropTypes.string.isRequired,
  //   tags: PropTypes.string.isRequired,
  // };

  render() {
    const { largeImageURL, webformatURL, tags } = this.props;

    return (
      <li
        className={styles.ImageGalleryItem}
        onClick={() => this.props.onClick(largeImageURL)}
      >
        <img
          src={webformatURL}
          alt={tags}
          className={styles.ImageGalleryItemImage}
        />
      </li>
    );
  }
}
export default ImageGalleryItem;
