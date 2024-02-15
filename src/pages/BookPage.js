import React from "react";
import { useParams } from "react-router-dom";

const BookPage = () => {
  // ルートパラメーターを取得
  // const params = useParams();
  // return <p>ISBNコード「{params.isbn}」のページです。</p>;

  // 分割代入
  // const { isbn } = useParams();
  // return <p>ISBNコード「{isbn}」のページです。</p>;

  // isbnパラメーターを省略可能にした場合 
  const { isbn = '123-456-789' } = useParams();
  return <p>ISBNコード「{isbn}」のページです。</p>;
};

export default BookPage;
