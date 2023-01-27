import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../pages/DefaultLayout";
import { Home } from "../pages/Home";
import { History } from "../pages/History";
import { Contexto } from "../pages/Contexto";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/contexto" element={<Contexto />} />
      </Route>
    </Routes>
  );
}
