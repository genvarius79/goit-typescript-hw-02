import React from "react";
import css from "./LoadMoreBtn.module.css";

interface Props {
  LoadMore: () => void;
}

const LoadMoreBtn: React.FC<Props> = ({ LoadMore }) => {
  const handleClick = (): void => {
    LoadMore();
  };

  return (
    <>
      <button className={css.btn} onClick={handleClick}>
        Load more items
      </button>
    </>
  );
};

export default LoadMoreBtn;
