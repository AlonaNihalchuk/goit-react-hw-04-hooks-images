import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import styles from "./App.module.css";
import Modal2 from "../Modal2/Modal2";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import fetchPictures from "../../fetch/api-service";
import mapper from "../../helper/mapper";

function App() {
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const [error, setError] = useState(null);
  const [pictureName, setPictureName] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImg, setLargeImg] = useState("");

  const toggleModal = (largeImg) => {
    setShowModal(!showModal);
    setLargeImg(largeImg);
  };

  useEffect(() => {
    if (pictureName === "") {
      return;
    }
    setLoading(true);
    fetchPictures(pictureName, page)
      .then(({ hits }) => {
        setPictures((prevState) => [...prevState, ...mapper(hits)]);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .then(setShowButton(true))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [page, pictureName]);

  const reset = () => {
    setPictures([]);
    setPage(1);
  };

  const handlePictureNameSubmit = (pictureName) => {
    reset();
    setPictureName(pictureName);
  };

  const loadMore = (e) => {
    setPage((prevState) => prevState + 1);
    handleShowButton();
  };

  const handleShowButton = () => {
    setShowButton(!showButton);
  };

  return (
    <section className={styles.phonebook}>
      <Searchbar onSubmit={handlePictureNameSubmit} />

      {!!pictures.length && (
        <ImageGallery
          hits={pictures}
          error={error}
          pictureName={pictureName}
          onClick={toggleModal}
        />
      )}

      {loading && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
      {showButton && <Button onClick={loadMore} />}
      {showModal && (
        <Modal2
          onClose={toggleModal}
          bigImg={largeImg}
          pictureName={pictureName}
        />
      )}
    </section>
  );
}

export default App;
