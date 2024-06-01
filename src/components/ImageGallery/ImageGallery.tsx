import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard.jsx";
import { APIresults } from "../../data-api";

type Props = {
  items: APIresults[];
  modal: (item: APIresults) => void;
};

const ImageGallery: React.FC<Props> = ({ items, modal }) => {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li className={css.item} key={item.user.id}>
          <ImageCard item={item} modal={modal} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
