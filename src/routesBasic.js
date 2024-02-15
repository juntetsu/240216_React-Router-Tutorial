// React Router本体をインポート
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// ルーティングで利用するページをインポート
import TopPage from "./pages/TopPage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";

// ルーティングテーブルを作成
// const routesBasic = createBrowserRouter([
//   { path: "/", element: <TopPage /> },
//   { path: "/about", element: <AboutPage /> },
//   { path: "/article/:id", element: <ArticlePage /> },
// ]);

// ルート定義をタグ形式で
const routesBasic = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<TopPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/article/:id" element={<ArticlePage />} />
    </>
  )
);

export default routesBasic;
