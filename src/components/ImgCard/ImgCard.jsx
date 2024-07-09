import s from "./ImgCard.module.css";
export const ImgCard = ({ alt_description, urls, modalIsOpen }) => {
  return (
    <>
      <img
        className={s.img}
        src={urls.small}
        alt={alt_description}
        onClick={() => modalIsOpen({ alt_description, urls: urls.regular })}
      />
    </>
  );
};
