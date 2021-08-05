import React from "react";
import Loader from "react-loader-spinner";
import styles from "./App.module.css";
import Modal2 from "../Modal2/Modal2";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import fetchPictures from "../../fetch/api-service";
import mapper from "../../helper/mapper";

class App extends React.Component {
  state = {
    pictures: [],
    error: null,
    pictureName: "",
    loading: false,
    showModal: false,
    largeImg: "",
    page: 1,
    showButton: false,
  };

  toggleModal = (largeImg) => {
    this.setState({ largeImg: largeImg });
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { pictureName, page } = this.state;

    if (pictureName !== prevState.pictureName || page !== prevState.page) {
      this.setState({
        loading: true,
        // picture: null,
      });
      // вызов ф-ии
      fetchPictures(pictureName, page)
        // работает
        .then(({ hits }) =>
          this.setState((prevState) => ({
            pictures: [...prevState.pictures, ...mapper(hits)],
          }))
        )
        // старое
        // .then(({ hits }) => {
        //   this.setState(({ pictures }) => {
        //     return { pictures: [...pictures, ...hits] };
        //   });
        // })
        // чужое
        // .then(({ data: { hits } }) =>
        //   this.setState((prevState) => ({
        //     pictures: [...prevState.pictures, ...mapper(hits)],
        //   }))
        // )
        .then(this.setState({ showButton: true }))
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  handlePictureNameSubmit = (pictureName) => {
    this.reset();
    this.setState({ pictureName });
  };

  reset = () => {
    this.setState({ page: 1, pictures: [] });
  };

  loadMore = (e) => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
    this.showButton();
  };

  showButton = () => {
    this.setState(({ showButton }) => ({ showButton: !showButton }));
  };

  render() {
    const {
      pictures,
      error,
      pictureName,
      loading,
      showButton,
      showModal,
      largeImg,
    } = this.state;

    return (
      <section className={styles.phonebook}>
        <Searchbar onSubmit={this.handlePictureNameSubmit} picture={pictures} />

        {!!pictures.length && (
          <ImageGallery
            hits={pictures}
            error={error}
            pictureName={pictureName}
            onClick={this.toggleModal}
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
        {showButton && <Button onClick={this.loadMore} />}
        {showModal && (
          <Modal2
            onClose={this.toggleModal}
            bigImg={largeImg}
            pictureName={pictureName}
          />
        )}
      </section>
    );
  }
}

export default App;
