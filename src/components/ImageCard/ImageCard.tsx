import { APIresults } from "../../data-api";
import css from "./ImageCard.module.css";

type Props = {
  item: APIresults;
  modal: (item: APIresults) => void;
};

const ImageCard: React.FC<Props> = ({ item, modal }) => {
  const onHandleClick = (): void => {
    modal(item);
  };

  return (
    <div className={css.item} onClick={onHandleClick}>
      <img
        className={css.image}
        src={item.urls.small}
        alt={item.alt_description}
        height={200}
      />
      <p className={css.title}>
        Description: <span className={css.text}>{item.alt_description}</span>
      </p>

      <p className={css.title}>
        Likes: <span className={css.text}>{item.likes}</span>
      </p>

      <p className={css.title}>
        Author: <span className={css.text}>{item.user.name}</span>
      </p>
    </div>
  );
};
export default ImageCard;
