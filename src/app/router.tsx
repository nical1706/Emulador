import { Navigate, Route, Routes } from "react-router";
import Layout from "../components/Layout";
import { CatalogPage } from "../pages/catalog";
import { ExplorePage } from "../pages/explore";
import { GamePage } from "../pages/game";
import { ProfilePage } from "../pages/profile";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/catalog" replace />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/:gameId" element={<GamePage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="explore/:gameId" element={<GamePage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}
