import s from "./LoadMore.module.css";

interface LoadMoreProps {
  handleLoadMore: () => void;
}

export const LoadMore: React.FC<LoadMoreProps> = ({ handleLoadMore }) => {
  return (
    <div className={s.box}>
      <button onClick={handleLoadMore} className="btn">
        Load More
      </button>
    </div>
  );
};
