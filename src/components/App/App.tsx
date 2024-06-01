import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import ImageModal from "../ImageModal/ImageModal.jsx";
import Loader from "../Loader/Loader.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { useEffect, useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import { APIresults, fetchData } from "../../data-api.js";

import css from "./App.module.css";

const App: React.FC = () => {
  const [items, setItems] = useState<APIresults[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalUrl, setModalUrl] = useState<string>("");
  const [modalAlt, setModalAlt] = useState<string>("");
  const [likes, setLikes] = useState<number>(0);
  const [author, setAuthor] = useState<string>("");

  const handleSearch = (newQuery: string): void => {
    setQuery(newQuery);
    setPage(1);
    setItems([]);
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  const handleOpenModal = (item: APIresults): void => {
    setShowModal(true);
    setModalUrl(item.urls.regular);
    setModalAlt(item.alt_description);
    setLikes(item.likes);
    setAuthor(item.user.name);
  };

  const handleCloseModal = (): void => {
    setShowModal(false);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getItems(): Promise<void> {
      try {
        setError(false);
        setIsLoading(true);
        const data: APIresults[] = await fetchData(query, page);
        setItems((prevItems) => {
          return [...prevItems, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getItems();
  }, [page, query]);

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />

      {error && <ErrorMessage />}

      {items.length > 0 && (
        <ImageGallery items={items} modal={handleOpenModal} />
      )}

      {isLoading && <Loader />}
      {items.length > 0 && !isLoading && (
        <LoadMoreBtn LoadMore={handleLoadMore} />
      )}
      {items.length > 0 && (
        <ImageModal
          modal={showModal}
          onClose={handleCloseModal}
          url={modalUrl}
          alt={modalAlt}
          likes={likes}
          author={author}
        />
      )}
    </div>
  );
};
export default App;
