import { Photo } from "../../App";
import s from "./ImgCard.module.css";
interface ImgProps {
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  modalIsOpen: (photo: { urls: string; alt_description: string }) => void;
}
export const ImgCard: React.FC<ImgProps> = ({
  alt_description,
  urls,
  modalIsOpen,
}) => {
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
