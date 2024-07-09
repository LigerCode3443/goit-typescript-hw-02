import "./App.css";
import {
  SearchBar,
  ImageGallery,
  LoadMore,
  Loader,
  ImgModal,
} from "components";
import { useEffect, useState } from "react";
import { getPhotos } from "service/photoApi";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [error, setError] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectImg, setSelectImg] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setIsLoader(true);
        setError(false);
        const { results, total, total_pages } = await getPhotos(query, page);
        setPhotos((prev) => [...prev, ...results]);
        setLoadMore(page < total_pages);
        if (!total) {
          setIsEmpty(true);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoader(false);
      }
    };

    getData();
  }, [query, page]);

  const handleSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setPhotos([]);
    setLoadMore(false);
    setIsEmpty(false);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };
  const modalIsOpen = (photo) => {
    setIsOpenModal(true);
    setSelectImg(photo);
  };
  const closeModal = () => {
    setIsOpenModal(false);
    setSelectImg(null);
  };
  return (
    <>
      <SearchBar setQuery={handleSubmit} />
      {error && <p className="error">Sorry error {error}</p>}

      {photos.length > 0 && (
        <ImageGallery photos={photos} modalIsOpen={modalIsOpen} />
      )}
      {isEmpty && (
        <p className="error">
          Nothing was found for this word {`<<${query}>>`}
        </p>
      )}

      {isLoader && <Loader />}
      {loadMore && <LoadMore handleLoadMore={handleLoadMore} />}
      <ImgModal
        modalIsOpen={isOpenModal}
        closeModal={closeModal}
        selectImg={selectImg}
      />
    </>
  );
}

export default App;
