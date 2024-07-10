import "./App.css";
import {
  SearchBar,
  ImageGallery,
  LoadMore,
  Loader,
  ImgModal,
} from "./components";
import { useEffect, useRef, useState } from "react";
import { PhotosProps, getPhotos } from "./service/photoApi";

interface Urls {
  small: string | undefined;
  regular: string | undefined;
}

export interface Photo {
  id: number;
  alt_description?: string;
  urls: Urls;
}

function App() {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoader, setIsLoader] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selectImg, setSelectImg] = useState<Photo | null>(null);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setIsLoader(true);
        setError(null);
        const { results, total, total_pages }: PhotosProps = await getPhotos(
          query,
          page
        );
        setPhotos((prev) => [...prev, ...results]);
        setLoadMore(page < total_pages);
        if (!total) {
          setIsEmpty(true);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Unknown error occurred");
        }
      } finally {
        setIsLoader(false);
      }
    };

    getData();
  }, [query, page]);

  const handleSubmit = (query: string) => {
    setQuery(query);
    setPage(1);
    setPhotos([]);
    setLoadMore(false);
    setIsEmpty(false);
  };

  const handleLoadMore = (): void => {
    setPage((prev) => prev + 1);
  };
  const modalIsOpen = (photo: Photo): void | Photo => {
    setIsOpenModal(true);
    setSelectImg(photo);
  };
  const closeModal = (): void => {
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
