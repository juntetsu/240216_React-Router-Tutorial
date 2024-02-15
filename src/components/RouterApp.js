import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const RouterApp = () => {
  return (
    <>
      <ul>
        {/* ルーティング対応のリンクを生成 */}
        <li><Link to="/">トップ</Link></li>
        <li><Link to="/about">私たちについて</Link></li>
        <li><Link to="/article">公開記事</Link></li>
      </ul>

      <hr />

      {/* リンク先の表示領域を確保（必須） */}
      <Outlet />
    </>
  )
}

export default RouterApp