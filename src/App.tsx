import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Dish } from "./pages/Dish/Dish";
import { Home } from "./pages/Home/Home";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/dishes/:category/:id" element={<Dish />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};
