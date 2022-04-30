import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
function App() {
  return (
    <BrowserRouter>
      <nav>our navbar</nav>
      <Routes>
        <Route path="/" element={<Home Link={Link} />}></Route>
        <Route path="about" element={<About Link={Link} />}></Route>
        <Route path="products" element={<Products Link={Link} />}></Route>
        <Route path="*" element={<Error Link={Link} />}></Route>
      </Routes>
      <footer>our footer</footer>
    </BrowserRouter>
  );
}

export default App;
