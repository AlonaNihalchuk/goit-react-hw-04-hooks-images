import styles from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

function ImageGalleryItem({ onClick, largeImageURL, webformatURL, tags }) {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => onClick(largeImageURL)}
    >
      <img
        src={webformatURL}
        alt={tags}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
