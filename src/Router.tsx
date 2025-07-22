import { Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  );
}
