import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AppBody } from "./components/Body";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { AboutClass } from "./components/AboutClass";
import { RestaurantsInfo } from "./components/RestaurantsInfo";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const FoodApp = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <FoodApp />,
    children: [
      { path: "/", element: <AppBody /> },
      { path: "/contact", element: <Contact /> },
      // { path: "/about", element: <About /> },
      { path: "/about", element: <AboutClass name={"Ankush"} /> },
      { path: "/restaurants/:id", element: <RestaurantsInfo /> },
    ],
  },
  ,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
