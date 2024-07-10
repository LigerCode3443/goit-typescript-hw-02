import { Photo } from "../../App";
import s from "./ImgCard.module.css";
interface ImgProps {
  photo: Photo;
  modalIsOpen: (photo: Photo) => void;
}
export const ImgCard: React.FC<ImgProps> = ({ photo, modalIsOpen }) => {
  return (
    <>
      <img
        className={s.img}
        src={photo.urls.small}
        alt={photo.alt_description}
        onClick={() => modalIsOpen(photo)}
      />
    </>
  );
};
