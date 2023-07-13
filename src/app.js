import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AppBody } from "./components/Body";
import { About } from "./components/About";
import { AboutClass } from "./components/AboutClass";
import { RestaurantsInfo } from "./components/RestaurantsInfo";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy } from "react";
import userContext from "./utils/context/userContext";

// const Contact = lazy(() => import("./components/Contact"));  if function component.
const Contact = lazy(() =>
  import("./components/Contact").then((module) => ({ default: module.Contact }))
);

const FoodApp = () => {
  const [user, setUser] = useState({
    name: "ankush puri",
    email: "ankush.puri@gmail.com",
  });
  // const { user } = useContext(userContext);
  // console.log("context data:-", user);
  return (
    <>
      <userContext.Provider
        value={{
          user: user,
          setUSer: setUser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </>
  );
};
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <FoodApp />,
    children: [
      { path: "/", element: <AppBody /> },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>loading data.....</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      // { path: "/about", element: <About /> },
      { path: "/about", element: <AboutClass name={"Ankush"} /> },
      { path: "/restaurants/:id", element: <RestaurantsInfo /> },
    ],
  },
  ,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
