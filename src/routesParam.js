import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RouterParam from "./components/RouterParam";

import TopPage from "./pages/TopPage";
import BookPage from "./pages/BookPage";
import SearchPage from "./pages/SearchPage";

const routesParam = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterParam />}>
      <Route path="/" element={<TopPage />} />
      {/* <Route path="/book/:isbn" element={<BookPage />} />  */}

      {/* :isbnパラメーターを省略可能にした場合 */}
      <Route path="/book/:isbn?" element={<BookPage />} /> 

      {/* 可変調パラメーターを定義 */}
      <Route path="/search/*" element={<SearchPage />} />
    </Route>
  )
);

export default routesParam;
