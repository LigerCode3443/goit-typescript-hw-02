import { useForm } from "react-hook-form";
import s from "./SearchBar.module.css";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const searchSchema = Yup.object({
  query: Yup.string()
    .min(2, "For a short name")
    .max(30, "For a long name")
    .required("Empty field"),
});

interface SearchBarProps {
  setQuery: (data: string) => void;
}
interface value {
  query: string;
}

export const SearchBar = ({ setQuery }: SearchBarProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(searchSchema),
  });
  const onSubmit = (data: value): void => {
    setQuery(data.query);
    reset();
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <input
          type="search"
          autoFocus
          {...register("query")}
          placeholder="Search..."
          className={s.input}
        />
        {errors.query && (
          <div className={s.error_valid}>{errors.query.message}</div>
        )}
        <button className="btn">Search</button>
      </form>
    </header>
  );
};
