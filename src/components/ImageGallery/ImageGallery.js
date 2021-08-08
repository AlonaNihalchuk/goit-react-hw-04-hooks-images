import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

function ImageGallery({ hits, onClick, error }) {
  return (
    <>
      <ul className={styles.ImageGallery}>
        {hits &&
          hits.map(({ imageId, smallImg, largeImg, tagsImg }) => (
            <ImageGalleryItem
              key={imageId}
              onClick={onClick}
              webformatURL={smallImg}
              largeImageURL={largeImg}
              tags={tagsImg}
            />
          ))}
      </ul>
      {error && <p>{error.message}</p>}
    </>
  );
}

ImageGallery.defaultProps = {
  hits: [],
  error: null,
};

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,

  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    }).isRequired
  ).isRequired,
  error: PropTypes.string,
};

export default ImageGallery;
