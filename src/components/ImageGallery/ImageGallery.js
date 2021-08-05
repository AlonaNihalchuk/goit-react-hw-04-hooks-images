import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
// import PropTypes from "prop-types";

const ImageGallery = ({ hits, onClick, error }) => {
  return (
    <>
      <ul className={styles.ImageGallery}>
        {hits &&
          hits.map((hit) => (
            <ImageGalleryItem
              key={hit.imageId}
              onClick={onClick}
              webformatURL={hit.smallImg}
              largeImageURL={hit.largeImg}
              tags={hit.tagsImg}
            />
          ))}
      </ul>
      {error && <p>{error.message}</p>}
    </>
  );
};

ImageGallery.defaultProps = {
  hits: [],
  error: null,
};

// ImageGallery.propTypes = {
//   onClick: PropTypes.func.isRequired,

//   hits: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//       tags: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   error: PropTypes.string,
// };

export default ImageGallery;
