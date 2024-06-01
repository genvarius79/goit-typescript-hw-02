import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { GoSearch } from "react-icons/go";
import { FormEvent } from "react";

type Props = {
  onSubmit: (searchValue: string) => void;
};

export default function SearchBar({ onSubmit }: Props) {
  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    if (form.query.value === "") {
      toast("Text must be entered to search for images!!!");
    }

    onSubmit(form.query.value);
    form.reset();
  };

  return (
    <header className={css.header}>
      <Toaster
        toastOptions={{
          className: css.toaster,
          style: {
            border: "1px solid #713200",
            padding: "16px",
            background: "#ff0000",
            color: "#ffffff",
            marginTop: "150px",
          },
        }}
      />
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.btn} type="submit">
          <GoSearch />
        </button>
        <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
