import { useSearchParams } from "react-router-dom";

export default function BookQuery() {
  const [params, setParams] = useSearchParams({ isbn: "978-4-8156-0184-34" });
  return <p>ISBNコード「{params.get("isbn")}」のページです。</p>;
}
