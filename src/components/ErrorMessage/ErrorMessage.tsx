import { MdError } from "react-icons/md";
import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {}

const ErrorMessage: React.FC<ErrorMessageProps> = () => {
  return (
    <div className={css.container}>
      <MdError className={css.icon} size={32} color={"white"} />
      <p className={css.text}>Oops! There was an error! Please reload!</p>
    </div>
  );
};

export default ErrorMessage;
