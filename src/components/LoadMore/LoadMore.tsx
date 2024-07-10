import s from "./LoadMore.module.css";
export const LoadMore = ({ handleLoadMore }) => {
  return (
    <div className={s.box}>
      <button onClick={handleLoadMore} className="btn">
        Load More
      </button>
    </div>
  );
};
