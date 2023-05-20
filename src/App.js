import Nav from "./Nav";
import Store from "./pages/Store";
import Mac from "./pages/Mac";
import Ipad from "./pages/Ipad";
import Iphone from "./pages/Iphone";

import Accessories from "./pages/Accessories";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route index element={<Store />} />
        <Route path="/Mac" element={<Mac />} />
        <Route path="/Ipad" element={<Ipad />} />
        <Route path="/Iphone" element={<Iphone />} />
        <Route path="/Accessories" element={<Accessories />} />
      </Routes>
    </div>
  );
}
