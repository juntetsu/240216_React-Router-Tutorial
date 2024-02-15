// React Router本体をインポート
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// ルーティングで利用するページをインポート
import RouterApp from "./components/RouterApp";
import TopPage from "./pages/TopPage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";

// RouterAppコンポーネントの配下に、各コンポーネントが位置する。という構成になっているため、
// この階層関係はルートテーブルにも反映する必要がある。
const routesLink = createBrowserRouter(
  createRoutesFromElements(
    // トップルートを追加
    <Route path="/" element={<RouterApp />}>
      {/* <Route path="" element={<TopPage />} /> */}
      <Route index element={<TopPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="article" element={<ArticlePage />} />
    </Route>
  )
);

export default routesLink;
