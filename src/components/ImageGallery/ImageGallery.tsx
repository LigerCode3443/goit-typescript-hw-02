import { Photo } from "../../App";
import { ImgCard } from "../ImgCard/ImgCard";
import s from "./ImageGallery.module.css";
interface GalleryProps {
  photos: Photo[];
  modalIsOpen: (photo: Photo) => void;
}
export const ImageGallery: React.FC<GalleryProps> = ({
  photos,
  modalIsOpen,
}) => {
  return (
    <ul className={s.list}>
      {photos.map((photo) => (
        <li key={photo.id} className={s.item}>
          <ImgCard photo={photo} modalIsOpen={modalIsOpen} />
        </li>
      ))}
    </ul>
  );
};
